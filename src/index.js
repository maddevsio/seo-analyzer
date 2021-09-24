import defaultRules from './rules/index'
import CFonts from 'cfonts'

import Input from './modules/input'
import Output from './modules/output'
import Logger from './modules/logger'

class SeoAnalyzer {
  constructor () {
    this.logger = new Logger();
    this.input = new Input();
    this.output = new Output();
    this.inputData = [];
    this.rules = [];
    this._ignoreFolders = [];
    this._ignoreFiles = [];
    return this;
  }
  
  //--------- Ignore methods ---------//
  ignoreFolders(folders) {
    this._ignoreFolders = folders;
    return this;
  }

  ignoreFiles(files) {
    this._ignoreFiles = files;
    return this;
  }
  // -------------------------------//

  // ------- Input functions ------- // 
  inputFiles(files) {
    this._showLogo();
    this.inputData = this.input.files(files);
    return this;
  }
  
  inputUrls(urls) {
    this._showLogo();
    this.inputData = this.input.urls(urls);
    return this;
  }
  
  inputFolders(folders) {
    this._showLogo();
    this.inputData = this.input.folders(folders, this._ignoreFolders);
    return this;
  }
  // ------------------------------ //
  
  // --------- Add Rule --------- //
  addRule(func, options = {}) {
    if (typeof func === 'string') {
      if (func in defaultRules) {
        this.rules.push({ 'rule': defaultRules[func], options });
      }
    } else {
      this.rules.push({ 'rule': func, options });
    }
    return this;
  }
  // ----------------------------- //
  
  // ------- Output functions ------- //
  outputConsole() {
    return (async() => {
      const json = await this.output.json(await this.inputData, this.rules);
      this.logger.result(json);
      return this;
    })();
  }

  outputJson(callback) {
    return (async() => {
      const json = await this.output.json(await this.inputData, this.rules);
      callback(json);
      return this;
    })();
  }

  _showLogo() {
    CFonts.say('Seo|Analyzer', {
      font: 'block',              // define the font face
      align: 'left',              // define text alignment
      colors: ['system'],         // define all colors
      background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
      letterSpacing: 1,           // define letter spacing
      lineHeight: 1,              // define the line height
      space: true,                // define if the output text should have empty lines on top and on the bottom
      maxLength: '0',             // define how many character can be on one line
      gradient: false,            // define your two gradient colors
      independentGradient: false, // define if you want to recalculate the gradient for each new line
      transitionGradient: false,  // define if this is a transition between colors directly
      env: 'node'                 // define the environment CFonts is being executed in
    });
  }
}

export default SeoAnalyzer
