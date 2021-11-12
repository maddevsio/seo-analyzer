!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("fs"),require("path"),require("jsdom"),require("cli-progress"),require("colors"),require("cfonts"),require("axios"),require("sitemap-stream-parser"),require("express")):"function"==typeof define&&define.amd?define(["fs","path","jsdom","cli-progress","colors","cfonts","axios","sitemap-stream-parser","express"],t):(e="undefined"!=typeof globalThis?globalThis:e||self)["seo-analyzer"]=t(e.fs,e.path,e.jsdom,e.cliProgress,e._colors,e.CFonts,e.axios,e.sitemaps,e.express)}(this,(function(e,t,r,s,n,o,i,a,l){"use strict";function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var h=u(e),c=u(t),g=u(s),p=u(n),d=u(o),f=u(i),m=u(a),y=u(l);const w={titleLengthRule:function(e,t){return new Promise(r=>{const s=e.window.document.querySelector("title");s||r("This HTML without <title> tag");const n=s.length;n<t.min&&r(`<title> too short(${n}). The minimum length should be ${t.min} characters.`),n>t.max&&r(`<title> too long(${n}). The maximum length should be ${t.max} characters.`),r(null)})},hTagsRule:function(e){return new Promise(t=>{let r="";const s=e.window.document.querySelectorAll("h1, h2, h3, h4, h5, h6");for(let e=0;e<s.length;e+=1){const t=s[e],n=s[e+1];if(n){const o=t.tagName.toLowerCase().replace("h",""),i=n.tagName.toLowerCase().replace("h","");if(o<i-1&&o!==i-1){r+=`Tag <h${i}>${s[e+1].textContent.replace(/(\r\n|\n|\r)/gm,"").trim()}</h${i}> should be </h${+o+1}>`}}}t(r)})},noTooManyStrongTagsRule:function(e,t){return new Promise(r=>{const s=e.window.document.querySelectorAll("strong");s&&s.length>t.threshold&&r(`This HTML have more than ${t.threshold} <strong> tags`),r(null)})},noMoreThanOneH1TagRule:function(e){return new Promise(t=>{const r=e.window.document.querySelectorAll("h1");r&&r.length>1&&t("This HTML have more than one <h1> tag"),t(null)})},imgTagWithAltAttritubeRule:function(e){return new Promise(t=>{let r=0;e.window.document.querySelectorAll("img").forEach(e=>{e.alt||r++}),r>0&&t(`There are ${r} <img> tag without alt attribute`),t(null)})},aTagWithRelAttritubeRule:function(e){return new Promise(t=>{let r=0;e.window.document.querySelectorAll("a").forEach(e=>{e.rel||r++}),r>0&&t(`There are ${r} <a> tag without rel attribute`),t(null)})},canonicalLinkRule:function(e){return new Promise(t=>{const r=e.window.document.querySelector('head > link[rel="canonical"]');r||t('This HTML without <link rel="canonical" href="..."> link'),r&&!r.href&&t("The canonical link without href attribute"),r&&"/"!==r.href.substr(-1)&&t("The href attribute does not have a slash at the end of the link."),t(null)})},metaBaseRule:function(e,t={list:[]}){return new Promise(r=>{const s=[];t&&t.names&&t.names.length&&t.names.forEach(t=>{const r=e.window.document.querySelector(`head > meta[name="${t}"]`);r?r.content||s.push(`The content attribute for the <meta name="${t}" content=""> tag is empty`):s.push(`This HTML without <meta name="${t}"> tag`)}),r(s)})},metaSocialRule:function(e,t={properties:[]}){return new Promise(r=>{const s=[];t&&t.properties&&t.properties.length&&t.properties.forEach(t=>{const r=e.window.document.querySelector(`head > meta[property="${t}"]`);r?r.content||s.push(`The content attribute for the <meta property="${t}" content=""> tag is empty`):s.push(`This HTML without <meta property="${t}"> tag`)}),r(s)})}};class _{result(e){this._logResult(e)}error(e,t){this._logError(e),t&&process.exit(1)}success(e){this._logSuccess(e)}info(e){this._logInfo(e)}printTextToConsole(e){const t=e.replace(" ","|");d.default.say(t,{font:"block",align:"left",colors:["system"],background:"transparent",letterSpacing:1,lineHeight:1,space:!0,maxLength:"0",gradient:!1,independentGradient:!1,transitionGradient:!1,env:"node"})}_logResult(e){if(!e.some(e=>e.report.length))return this._logSuccess("\n👍 SEO defects were not detected.\n");this._logInfo("\n🚀  Report of errors");for(const t of e)this._logInfo("\nFile: "+t.source.trim()),this._logError(""+t.report.join("\n"));return this._logSuccess("\n-------- 🚀 Finished! --------\nThanks for using Seo Analyzer!\n"),process.exit(1)}_logError(e){console.error(""+p.default.red(e))}_logInfo(e){console.log(""+p.default.yellow(e))}_logSuccess(e){console.log(""+p.default.green(e))}}class F{constructor(){this.consoleProgressBar=new g.default.Bar({format:"Processing... |"+p.default.green("{bar}")+"| {percentage}% || {value}/{total} Pages",barCompleteChar:"█",barIncompleteChar:"░",hideCursor:!0}),this.logger=new _,this.inputUrl="",this.ignoreUrls=""}async run(e,t){this.inputUrl="http://localhost:"+e,this.ignoreUrls=t;const r=await this._getLinksFromSitemap();return await this._getHtmlDomFromLinks(r)}_getLinksFromSitemap(){return this.logger.info(`🚀  Get sitemap from ${this.inputUrl}\n`),new Promise(e=>{const t=this.inputUrl+"/sitemap.xml",r=[];m.default.parseSitemaps(t,e=>{const t=e.replace(/^.*\/\/[^/]+/,"");-1===this.ignoreUrls.indexOf(t)&&r.push(this._formatLink(e))},t=>{t?this.logger.error("❌  Sitemap not found\n",1):0===r.length?this.logger.error("❌  Links not found\n",1):(this.logger.success("✅  Done\n"),e(r))})})}_formatLink(e){return e.replace(/^.*\/\/[^/]+/,this.inputUrl)}sleep(e){return new Promise(t=>setTimeout(t,e))}async _getHtmlDomFromLinks(e){const t=[],r=[];this.logger.info("🚀  Parsing HTML\n"),this.consoleProgressBar.start(e.length,0);for(const s of e)r.push(f.default.get(s).then(e=>{e&&200===e.status&&t.push({source:s,text:e.data})}).catch(e=>{const t=e&&e.response&&e.response.status||500;console.log(`Error: ${e} - ${s}`),console.log(`\n${p.default.yellow("==>")} ${p.default.white(s)} ${p.default.red(t)}`)}).finally(()=>{this.consoleProgressBar.increment()})),await this.sleep(500);return Promise.all(r).then(()=>(this.consoleProgressBar.stop(),t))}}class T{constructor(){this.logger=new _,this.scraper=new F,this.consoleProgressBar=new g.default.Bar({format:"Processing... |"+p.default.green("{bar}")+"| {percentage}% || {value}/{total} Folders",barCompleteChar:"█",barIncompleteChar:"░",hideCursor:!0}),this.badType='The inputFiles function takes an array only ["index.html", "...", "..."]',this.emptyList='You need to pass an array to the inputFiles function ["index.html", "...", "..."]',this.ignoreFolders=[],this.ignoreFiles=[]}async files(e=[],t=[]){this.logger.info("\n🚀  Parsing files\n"),0===e.length&&this.logger.error(this.emptyList),Array.isArray(e)||this.logger.error(this.badType),this.ignoreFiles=t;const r=await this._getHtml(e);return await this._getDom(r)}async folders(e=[],t=[],r=[]){Array.isArray(e)||this.logger.error('❌  The "inputFolders" method expects an array of folders.\n',!0),this.logger.info("🚀  Parsing folders\n"),this.consoleProgressBar.start(e.length,0),this.ignoreFolders=t,this.ignoreFiles=r;const s=await this._getFilesFromFolders(e);return await this.files(s,r)}async spa(e,t=[]){const r=await this.scraper.run(e,t);return await this._getDom(r)}async _getFilesFromFolders(e=[]){const t=[];for(const r of e){const e=await this._getFilesFromFolder(r);this.consoleProgressBar.increment(),t.push(...e)}return this.consoleProgressBar.stop(),t}_getFilesFromFolder(e=[]){try{const t=h.default.readdirSync(e).map(t=>c.default.join(e,t)),r=t.filter(e=>h.default.statSync(e).isFile()&&".html"===c.default.extname(e)),s=t.filter(e=>!r.includes(e)&&h.default.statSync(e).isDirectory()).filter(e=>!this.ignoreFolders.includes(e)).reduce((e,t)=>e.concat(this._getFilesFromFolder(t)),[]);return[...r,...s]}catch(t){return this.logger.error(`Folder "${e}" not found`),[]}}_getHtml(e){const t=[],r=new g.default.Bar({format:"Processing... |"+p.default.green("{bar}")+"| {percentage}% || {value}/{total} Sources",barCompleteChar:"█",barIncompleteChar:"░",hideCursor:!0});return r.start(e.length,0),e.forEach(e=>{if(!this.ignoreFiles.includes(e))try{const s=h.default.readFileSync(e,"utf8");t.push({source:e,text:s}),r.increment()}catch(t){r.increment(),this.logger.error(`File "${e}" not found`)}}),r.stop(),t}_getDom(e){const t=[],s=new g.default.Bar({format:"Handling html |"+p.default.green("{bar}")+"| {percentage}% || {value}/{total} Sources",barCompleteChar:"█",barIncompleteChar:"░",hideCursor:!0});this.logger.info("\n🚀  Get DOM from HTML\n"),s.start(e.length,0);const n=new r.VirtualConsole;return e.forEach(e=>{let o=new r.JSDOM(e.text,{virtualConsole:n});t.push({source:e.source,dom:o}),s.increment()}),s.stop(),t}}class b{constructor(){this.consoleProgressBar=new g.default.Bar({format:"Ranning rules |"+p.default.green("{bar}")+"| {percentage}% || {value}/{total} Rules",barCompleteChar:"█",barIncompleteChar:"░",hideCursor:!0}),this.badType='The inputFiles function takes an array only ["index.html", "...", "..."]',this.emptyList='You need to pass an array to the inputFiles function ["index.html", "...", "..."]'}async run(e,t){0===e.length&&this.logger.error(this.emptyList),Array.isArray(e)||this.logger.error(this.badType);return await this._startAnalyzer(e,t)}async _startAnalyzer(e,t){const r=[];for(const s of e){console.log(`\n${p.default.blue("==>")} Analysis ${p.default.white(s.source)}`);const e=await this._analyzeDOM(s.dom,t);e&&e.length&&r.push({source:s.source,report:e})}return r}async _analyzeDOM(e,t){const r=[];this.consoleProgressBar.start(t.length,0);for(const s of t){let t=null;try{t=await s.rule(e,s.options)}catch(e){t=e}Array.isArray(t)?r.push(...t):t&&r.push(t),this.consoleProgressBar.increment()}return this.consoleProgressBar.stop(),r}}class S{constructor(){this.analyzer=new b}async object(e,t){return await this.analyzer.run(e,t)}async json(e,t){const r=await this.analyzer.run(e,t);return JSON.stringify(r,null,2)}}const P=y.default(),x=new _;return class{constructor(){return this._logger=new _,this._input=new T,this._output=new S,this._inputData=[],this._defaultRules=w,this._rules=[],this._ignoreFolders=[],this._ignoreFiles=[],this._ignoreUrls=[],this}ignoreFiles(e){return this._ignoreFiles=e,this}ignoreFolders(e){return this._ignoreFolders=e,this}ignoreUrls(e){return this._ignoreUrls=e,this}inputFiles(e){return 0!==this._inputData.length||(this._logger.printTextToConsole("SEO Analyzer"),this._inputData=this._input.files(e,this._ignoreFiles)),this}inputFolders(e){return 0!==this._inputData.length||(this._logger.printTextToConsole("SEO Analyzer"),this._inputData=this._input.folders(e,this._ignoreFolders,this._ignoreFiles)),this}inputSpaFolder(e,t=9999){return this._inputData?(this._logger.printTextToConsole("SEO Analyzer"),function(e,t){P.use(y.default.static(e)),P.get("/",(e,t)=>{t.sendFile(c.default.join(__dirname,"/index.html"))}),P.listen(t),x.info(`🚀  Server started on port ${t}\n`),x.success("✅  Done\n")}(e,t),this._inputData=this._input.spa(t,this._ignoreUrls),this):this}addRule(e,t={}){return"string"==typeof e?e in w?this._rules.push({rule:w[e],options:t}):this._logger.error(`\n\n❌  Rule "${e}" not found\n`,1):"function"==typeof e?this._rules.push({rule:e,options:t}):this._logger.error("\n\n❌  Rule must be a function or a string\n",1),this}outputConsole(){return(async()=>{const e=await this._output.object(await this._inputData,this._rules);this._logger.result(e)})(),this}outputJson(e){return(async()=>{const t=await this._output.json(await this._inputData,this._rules);e(t)})(),this}outputObject(e){return(async()=>{const t=await this._output.object(await this._inputData,this._rules);e(t)})(),this}}}));
//# sourceMappingURL=seo-analyzer.js.map
