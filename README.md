# Seo Analyzer

> A library for analyze a HTML files to show all of the SEO defects

```bash
 ███████╗ ███████╗  ██████╗  
 ██╔════╝ ██╔════╝ ██╔═══██╗ 
 ███████╗ █████╗   ██║   ██║ 
 ╚════██║ ██╔══╝   ██║   ██║ 
 ███████║ ███████╗ ╚██████╔╝ 
 ╚══════╝ ╚══════╝  ╚═════╝  

  █████╗  ███╗   ██╗  █████╗  ██╗     ██╗   ██╗ ███████╗ ███████╗ ██████╗  
 ██╔══██╗ ████╗  ██║ ██╔══██╗ ██║     ╚██╗ ██╔╝ ╚══███╔╝ ██╔════╝ ██╔══██╗ 
 ███████║ ██╔██╗ ██║ ███████║ ██║      ╚████╔╝    ███╔╝  █████╗   ██████╔╝ 
 ██╔══██║ ██║╚██╗██║ ██╔══██║ ██║       ╚██╔╝    ███╔╝   ██╔══╝   ██╔══██╗ 
 ██║  ██║ ██║ ╚████║ ██║  ██║ ███████╗   ██║    ███████╗ ███████╗ ██║  ██║ 
 ╚═╝  ╚═╝ ╚═╝  ╚═══╝ ╚═╝  ╚═╝ ╚══════╝   ╚═╝    ╚══════╝ ╚══════╝ ╚═╝  ╚═╝ 
```

## Usage

Install with npm `npm install -D seo-analyzer`

### Getting started

```js
const SeoAnalyzer = require('seo-analyzer');

new SeoAnalyzer().inputFiles(<array>).addRule(<function>).addRule(<function>).outputConsole(<console>);
```

#### Available methods:

| Method        | Params                                | Description                                                                                             |
|---------------|---------------------------------------|---------------------------------------------------------------------------------------------------------|
| ignoreFiles   | ['dist/about.html']                   | This method expects an array of files to ignore before analysis.                                        |
| ignoreFolders | ['dist/ignore']                       | This method expects an array of folders to ignore before analysis.                                      |
| inputFiles    | ['dist/index.html']                   | This method expects an array of html files to analyze.                                                  |
| inputFolders  | ['dist', 'src']                       | This method expects an array of folders with html files to analyze.                                     |
| addRule       | function(dom) {}                      | This method adds a custom rule to check incoming HTML files.                                            |
| outputObject  | function(obj) {}                      | This method will return the report as a javascript object.                                              |
| outputJson    | function(json) {}                     | This method will return the report in JSON format.                                                      |
| outputConsole | null                                  | This method must be used at the very end of the chain, because it completes the process in the console. |

#### One way: read a list HTML files and log report to console
```js
const SeoAnalyzer = require('seo-analyzer');

new SeoAnalyzer()
  .inputFiles(['index.html', 'about.html'])
  .addRule('noMoreThanOneH1TagRule')
  .outputConsole();
```

#### Two way: read a folders with HTML files and log report to console

```js
const SeoAnalyzer = require('seo-analyzer');

new SeoAnalyzer()
  .inputFolders(['dist', 'src'])
  .addRule('noMoreThanOneH1TagRule')
  .outputConsole();
```

#### Three way: read a folders with HTML files and return json

```js
const SeoAnalyzer = require('seo-analyzer');

new SeoAnalyzer()
  .inputFolders(['dist', 'src'])
  .addRule('noMoreThanOneH1TagRule')
  .outputJson(json => console.log(json));
```

#### Fourth way: ignore subfolder "test" and 404.html in folder "src" and return js object

```js
const SeoAnalyzer = require('seo-analyzer');

new SeoAnalyzer()
  .ignoreFolders(['src/test'])
  .ignoreFiles(['src/404.html'])
  .inputFolders(['dist', 'src'])
  .addRule('noMoreThanOneH1TagRule')
  .outputObject(json => console.log(json));
```

#### Example of the output of all SEO defects in the console.

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


Processing folders |████████████████████████████████████████| 100% || 2/2 Folders
File analysis |████████████████████████████████████████| 100% || 64/64 Files

File: example/html/about.html
Not found <p> tags

File: example/html/team.html
<title> too short(8). The minimum length should be 10 characters.
This HTML without <meta name="description"> tag
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
This HTML without <meta name="description"> tag
This HTML without <meta name="keywords"> tag
This HTML without <link rel="canonical" href="..."> link
Not found <p> tags
```

or

```bash
SEO defects were not detected.
```

#### A list of rules that are available by default

```js
...
.addRule('titleLengthRule', { min: 10, max: 50 })
.addRule('noTooManyStrongTagsRule', { threshold: 2 })
.addRule('metaBaseRule', { list: ['description', 'viewport'] })
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
.addRule('hTagsRule')
.addRule('noMoreThanOneH1TagRule')
.addRule('imgTagWithAltAttritubeRule')
.addRule('headTagWithTitleAndDescriptionKeywordsMetaRule')
.addRule('aTagWithRelAttritubeRule')
.addRule('canonicalLinkRule')
...
```

#### Add custom rule

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
