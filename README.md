# SEO Checker
> A library for scanning a HTML file to show all of the SEO defects 

## Usage

Install with npm `npm install seo-inspector --save`

### Getting started

Require the library and then all the methods listed below will be made available to you.

```js
new SeoInspector(<options>).read(<input>).addRule(<rule>).addRule(<rule>).write(<output>);
```

Usage:

* options.done: callback function.
* input: a HTML file path
* output: a file path
* rule: predefined rule name and settings.

#### One way: read from a HTML file, write result to a file

```js
import fs from 'fs';
const SeoInspector = require('seo-inspector')
new SeoInspector({ done:
                    (err, data) => {
                        if (err) throw err;
                    }
                })
.read('source/target.html')
.write('destination/report.txt');
```

#### Two way: read from a Node Readable Stream, write result to a Node Writable Stream

```js
import fs from 'fs';
const SeoInspector = require('seo-inspector')
new SeoInspector({ done:
                    (err, data) => {
                        if (err) throw err;
                    }
                })
.read(fs.createReadStream('source/target.html'))
.write(fs.createWriteStream('destination/report.txt'));
```

#### Three way: read from a HTML file, write result to console

```js
import fs from 'fs';
const SeoInspector = require('seo-inspector')
new SeoInspector({ done:
                    (err, data) => {
                        if (err) throw err;
                    }
                })
.read('source/target.html')
.write(console);
```

#### Example output to show all SEO defects

```
SEO defects found:
There are 2 <img> tag without alt attribute
There are 2 <a> tag without rel attribute
This HTML without <title> tag
This HTML without <meta name="descriptions"> tag
This HTML without <meta name="keywords"> tag
This HTML have more than 15 <strong> tags
This HTML have more than one <h1> tag
```
or
```
No any SEO defect found.
```

#### Chaining any rules and config check options, or just to apply all rules by default

Now supported and predefined SEO rules are `ImgTagWithAltAttritube`, `ATagWithRelAttritube`, `HeadTagWithTitleAndDescriptionsKeywordsMeta`, `NoTooManyStrongTags` and `NoMoreThanOneH1Tag`

```js
...
.addRule('ImgTagWithAltAttritube')
.addRule('NoTooManyStrongTags', { threshold: 20 })
...
```

#### Add custom rule by creating a class to extend base rule and implement check method.

The `object` key is required setting for check options : 

```js
import UserCustomRule from './UserCustomRule';
...
.addRule('UserCustom', { object: new UserCustomRule({ threshold: 5 }) })
...
```

Implement your custom rule checker class, extend base rule class is mandatory :

```js
'use strict'

import BaseRule from './BaseRule'

class NoTooManyStrongTagsRule extends BaseRule {
  check (dom) {
    if (this.options.enabled === 0) {
      return
    }
    let report = ''
    const elements = dom.window.document.querySelectorAll('strong')
    if (elements && elements.length > this.options.threshold) {
      report += 'This HTML have more than ' + this.options.threshold + ' <strong> tags'
    }
    return report
  }
}

export default NoTooManyStrongTagsRule
```
