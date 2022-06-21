# SEO analyzer — library for searching SEO issues

[![Developed by Mad Devs](https://maddevs.io/badge-dark.svg)](https://maddevs.io?utm_source=github&utm_medium=madboiler)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![Preview](preview.jpg)

The library for analyze a HTML files to show all of the SEO defects.

**Link to article** https://maddevs.io/insights/blog/seo-analyzer/

## Translations of documentation

- English
- [Russian](./README_RU.md)

## Advantages of this plugin

* Easy setup.
* Adding custom rules.
* 6 ready-made rules.
* Running the seo-analyzer for Next.js SSR applications.
* Running the seo-analyzer for SPA applications.
* Running the seo-analyzer in pipelines(github, gitlab, ...) or pre-push or anywhere else.
* Multiple options for outputting the result.

## Why you should use Seo Analyzer

* **Saves time:** will save you from manually searching for seo problems.
* **Seo Friendly:** will save your project from problems with search engines.
* **It’s free:** we’re happy to share the results of our work.

## Installation

Install with npm

```sh
npm install -D seo-analyzer
```

## Usage

### Getting started

Setting up the SEO analyzer is as simple as possible. It will look something like this:

```js
const SeoAnalyzer = require('seo-analyzer');

new SeoAnalyzer()
  .inputFiles(<array>)
  .addRule(<function>)
  .addRule(<function>)
  .outputConsole();
```

Next I will show you some examples.

#### One way: file analysis for SPA application and log report to console

```js
const SeoAnalyzer = require('seo-analyzer');

new SeoAnalyzer()
  .ignoreUrls(['/404', '/login'])
  .inputSpaFolder('/dist', 'sitemapindex.xml', 3000)
  .addRule('imgTagWithAltAttributeRule')
  .outputConsole();
```

#### Two way: read a list HTML files and log report to console

```js
const SeoAnalyzer = require('seo-analyzer');

new SeoAnalyzer()
  .inputFiles(['index.html', 'about.html'])
  .addRule('imgTagWithAltAttributeRule')
  .outputConsole();
```

#### Three way: read a folders with HTML files and log report to console

```js
const SeoAnalyzer = require('seo-analyzer');

new SeoAnalyzer()
  .inputFolders(['dist', 'src'])
  .addRule('imgTagWithAltAttributeRule')
  .outputConsole();
```

#### Fourth way: read a folders with HTML files and return json

```js
const SeoAnalyzer = require('seo-analyzer');

new SeoAnalyzer()
  .inputFolders(['dist', 'src'])
  .addRule('imgTagWithAltAttributeRule')
  .outputJson(json => console.log(json));
```

#### Fifth way: ignore subfolder "test" and 404.html in folder "src" and return js object

```js
const SeoAnalyzer = require('seo-analyzer');

new SeoAnalyzer()
  .ignoreFolders(['src/test'])
  .ignoreFiles(['src/404.html'])
  .inputFolders(['dist', 'src'])
  .addRule('imgTagWithAltAttributeRule')
  .outputObject(obj => console.log(obj));
``` 

#### Sixth way: file analysis for Next.js SSR application and log report to console

```js
const SeoAnalyzer = require('seo-analyzer');

new SeoAnalyzer()
  .inputNextJs(3000)
  .addRule('imgTagWithAltAttributeRule')
  .outputConsole();
```

## Available methods:

| Method         | Params               | Description                                                                                             |
|----------------|----------------------|---------------------------------------------------------------------------------------------------------|
| ignoreFiles    | ['dist/about.html']  | This method expects an array of files to ignore before analysis.                                        |
| ignoreFolders  | ['dist/ignore']      | This method expects an array of folders to ignore before analysis.                                      |
| ignoreUrls     | ['/404']             | This method expects an array of urls to ignore before analysis.                                         |
| inputFiles     | ['dist/index.html']  | This method expects an array of html files.                                                             |
| inputFolders   | ['dist', 'src']      | This method expects an array of folders with html files.                                                |
| inputSpaFolder | '/dist', 'sitemap.xml', 3000        | This method expects an string of folder with SPA builded files to production & port for run server.     |
| inputNextJs    | 3000                 | This method expects a port for run next.js server.                                                              |
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

### Img Tag With Alt Attribute Rule

Checks if all `<img>` tags have alt="" attribute.

```js
.addRule('imgTagWithAltAttributeRule')
```

### `<a>` Tag With Rel Attribute Rule

Checks if all `<a>` tags have rel="" attribute.

```js
.addRule('aTagWithRelAttributeRule')
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

## What's new
One new rule was created and three obsolete rules were deleted.

✅: added\
❌: removed

| ✅ | ❌ | Rule | Description |
| :---: | :---: | :--- | :--- |
| ✅  |  | inputNextJs | Running the seo-analyzer for Next.js SSR applications |
|    |❌ | hTagsRule | Only for HTML4 |
|    |❌ | noMoreThanOneH1TagRule | Only for HTML4 |
|    |❌ | noTooManyStrongTagsRule | Only for HTML4 |


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
