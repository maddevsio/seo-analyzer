# Seo Analyzer

[![Developed by Mad Devs](https://maddevs.io/badge-dark.svg)](https://maddevs.io?utm_source=github&utm_medium=madboiler)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![Preview](preview.jpg)

The library for analyze a HTML files to show all of the SEO defects.

## Advantages of this plugin

* Easy setup.
* Adding custom rules.
* 9 ready-made rules.
* Running the seo-analyzer for SPA applications.
* Running the seo-analyzer in pipelines(github, gitlab, ...) or pre-push or anywhere else.
* Multiple options for outputting the result.

## Why you should use Seo Analyzer

* **Saves time:** will save you from manually searching for seo problems.
* **Seo Friendly:** will save your project from problems with search engines.
* **It’s free:** we’re happy to share the results of our work.

## Usage

Install with npm `npm install -D seo-analyzer`

### Getting started

```js
const SeoAnalyzer = require('seo-analyzer');

new SeoAnalyzer()
  .inputFiles(<array>)
  .addRule(<function>)
  .addRule(<function>)
  .outputConsole();
```
#### One way: file analysis for SPA application and log report to console

```js
const SeoAnalyzer = require('seo-analyzer');

new SeoAnalyzer()
  .ignoreUrls(['/404', '/login'])
  .inputSpaFolder('/dist', 3000)
  .addRule('noMoreThanOneH1TagRule')
  .outputConsole();
```

#### Two way: read a list HTML files and log report to console

```js
const SeoAnalyzer = require('seo-analyzer');

new SeoAnalyzer()
  .inputFiles(['index.html', 'about.html'])
  .addRule('noMoreThanOneH1TagRule')
  .outputConsole();
```

#### Three way: read a folders with HTML files and log report to console

```js
const SeoAnalyzer = require('seo-analyzer');

new SeoAnalyzer()
  .inputFolders(['dist', 'src'])
  .addRule('noMoreThanOneH1TagRule')
  .outputConsole();
```

#### Fourth way: read a folders with HTML files and return json

```js
const SeoAnalyzer = require('seo-analyzer');

new SeoAnalyzer()
  .inputFolders(['dist', 'src'])
  .addRule('noMoreThanOneH1TagRule')
  .outputJson(json => console.log(json));
```

#### Fifth way: ignore subfolder "test" and 404.html in folder "src" and return js object

```js
const SeoAnalyzer = require('seo-analyzer');

new SeoAnalyzer()
  .ignoreFolders(['src/test'])
  .ignoreFiles(['src/404.html'])
  .inputFolders(['dist', 'src'])
  .addRule('noMoreThanOneH1TagRule')
  .outputObject(obj => console.log(obj));
``` 

## Available methods:

| Method         | Params               | Description                                                                                             |
|----------------|----------------------|---------------------------------------------------------------------------------------------------------|
| ignoreFiles    | ['dist/about.html']  | This method expects an array of files to ignore before analysis.                                        |
| ignoreFolders  | ['dist/ignore']      | This method expects an array of folders to ignore before analysis.                                      |
| ignoreUrls     | ['/404']             | This method expects an array of urls to ignore before analysis.                                         |
| inputFiles     | ['dist/index.html']  | This method expects an array of html files.                                                             |
| inputFolders   | ['dist', 'src']      | This method expects an array of folders with html files.                                                |
| inputSpaFolder | '/dist', 3000        | This method expects an string of folder with SPA builded files to production & port for run server.     |
| addRule        | function(dom) {}     | This method adds a custom rule to check incoming HTML files.                                            |
| outputObject   | function(obj) {}     | This method will return the report as a javascript object.                                              |
| outputJson     | function(json) {}    | This method will return the report in JSON format.                                                      |
| outputConsole  | null                 | This method must be used at the very end of the chain, because it completes the process in the console. |

## List of rules that are available by default

Below are the rules that are executed for each file transferred to Seo Analyzer. They are disabled by default and must be added.

### Title Length Rule

Checks the length of tag `<title>`. Two parameters are accepted:
 
* **min:** minimum length of the header
* **max:** maximum length of the header 

```js
.addRule('titleLengthRule', { min: 10, max: 50 })
```

### H Tags Rule

Checks if <h> is positioned correctly on the page.

#### Bad

```html
<h1>
- <h3>
- - <h4>
- <h2>
```

#### Good

```html
<h1>
- <h2>
- - <h3>
- <h2>
```

```js
.addRule('hTagsRule')
```

### No More Than One H1 Tag Rule

Checks the number of `<h1>` tags on the page.

```js
.addRule('noMoreThanOneH1TagRule')
```

### Img Tag With Alt Attritube Rule

Checks if all `<img>` tags have alt="" attribute.

```js
.addRule('imgTagWithAltAttritubeRule')
```

### <a> Tag With Rel Attritube Rule

Checks if all <a> tags have rel="" attribute

```js
.addRule('aTagWithRelAttritubeRule')
```

### No Too Many Strong Tags Rule

Checks the number of `<strong>` tags on the page. Accepts one parameter:

* **threshold:** maximum number of tags on the page 

```js
.addRule('noTooManyStrongTagsRule', { threshold: 2 })
```

### Meta Base Rule

Checks if the specified **basic** meta tags are present on the page. Accepts one parameter:

* **list:** list of required meta tags

```js
.addRule('metaBaseRule', { list: ['description', 'viewport'] })
```

### Meta Social Rule

Checks if the specified **social** meta tags are present on the page. Accepts one parameter:

* **properties:** list of required meta tags

```js
.addRule('metaSocialRule', {
  properties: [
    'og:url',
    'og:type',
    'og:site_name',
    'og:title',
    'og:description',
    'og:image',
    'og:image:width',
    'og:image:height',
    'twitter:card',
    'twitter:text:title',
    'twitter:description',
    'twitter:image:src',
    'twitter:url'
  ], 
})
```

### Canonical Link Rule

Checks if a canonical link exists on the page.

```js
.addRule('canonicalLinkRule')
```

### Add custom rule

A custom rule is a function that takes a DOM tree argument.

```js
function customRule(dom) {
  return new Promise(async (resolve, reject) => {
    const paragraph = dom.window.document.querySelector('p');
    if (paragraph) {
      resolve('');
    } else {
      reject('Not found <p> tags');
    }
  });
}

...
.addRule(customRule)
...
```

## Example of the output of all SEO defects in the console.

```bash

 ███████╗ ███████╗  ██████╗
 ██╔════╝ ██╔════╝ ██╔═══██╗
 ███████╗ █████╗   ██║   ██║
 ╚════██║ ██╔══╝   ██║   ██║
 ███████║ ███████╗ ╚██████╔╝
 ╚══════╝ ╚══════╝  ╚═════╝

  █████╗  ███╗   ██╗  █████╗  ██╗      ██╗   ██╗ ███████╗ ███████╗ ██████╗
 ██╔══██╗ ████╗  ██║ ██╔══██╗ ██║      ╚██╗ ██╔╝ ╚══███╔╝ ██╔════╝ ██╔══██╗
 ███████║ ██╔██╗ ██║ ███████║ ██║       ╚████╔╝    ███╔╝  █████╗   ██████╔╝
 ██╔══██║ ██║╚██╗██║ ██╔══██║ ██║        ╚██╔╝    ███╔╝   ██╔══╝   ██╔══██╗
 ██║  ██║ ██║ ╚████║ ██║  ██║ ███████╗    ██║    ███████╗ ███████╗ ██║  ██║
 ╚═╝  ╚═╝ ╚═╝  ╚═══╝ ╚═╝  ╚═╝ ╚══════╝    ╚═╝    ╚══════╝ ╚══════╝ ╚═╝  ╚═╝



🚀  Analysis of files

==> Analysis example/index.html
Handling files by rules |████████████████████████████████████████| 100% || 11/11 Rules

🚀  Report of errors

File: example/index.html
<title> too short(1). The minimum length should be 10 characters.
This HTML have more than 2 <strong> tags
This HTML without <meta property="og:url"> tag
This HTML without <meta property="og:type"> tag
This HTML without <meta property="og:site_name"> tag
This HTML without <meta property="og:title"> tag
This HTML without <meta property="og:description"> tag
This HTML without <meta property="og:image"> tag
This HTML without <meta property="og:image:width"> tag
This HTML without <meta property="og:image:height"> tag
This HTML without <meta property="twitter:card"> tag
This HTML without <meta property="twitter:text:title"> tag
This HTML without <meta property="twitter:description"> tag
This HTML without <meta property="twitter:image:src"> tag
This HTML without <meta property="twitter:url"> tag
Tag <h3>Title 3</h3> should be </h2>
This HTML have more than one <h1> tag
There are 1 <img> tag without alt attribute
This HTML without <meta name="keywords"> tag
There are 1 <a> tag without rel attribute
The canonical link without href attribute

-------- 🚀 Finished! --------
Thanks for using Seo Analyzer!
```

or

```bash
👍 SEO defects were not detected.
```

## Licensing

MIT License

Copyright (c) 2021 Mad Devs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
