'use strict'

import fs from 'fs'
import { JSDOM } from 'jsdom'
import _ from 'lodash'
import iconv from 'iconv-lite'
import RuleFactory from './RuleFactory'

class SeoInspector {
  constructor (options = {}) {
    this.done = (_.has(options, ['done'])) ? options.done : (err) => { if (err) throw err }
    this.input = null
    this.output = null
    this.ruleFactory = new RuleFactory()
    this.defaultRules = this.ruleFactory.getDefaultRules()
    this.rules = {}
    return this
  }

  read (input) {
    this.input = input
    return this
  }

  addRule (name, options) {
    if (_.has(this.defaultRules, name)) {
      _.set(this.rules, name, options)
    }

    if (_.has(options, ['object'])) {
      _.set(this.rules, name, options)
    }
    return this
  }

  write (output) {
    this.output = output
    if (_.isEmpty(this.rules)) {
      this.rules = this.defaultRules
    }
    this._run()
  }

  _run () {
    this._getHtml()
        .then(
            html => this._getDom(html)
        )
        .then(
            dom => this._getSummary(dom)
        )
        .then(
            summary => this._output(summary)
        )
  }

  _getHtml () {
    return new Promise((resolve, reject) => {
      const type = this.input.constructor.name
      switch (type) {
        case 'String':
          const filePath = this.input
          fs.readFile(filePath, 'utf8', (err, html) => {
            if (err) return this.done(err)
            resolve(html)
          })
          break
        case 'ReadStream':
          const readStream = this.input
          let chunks = []
          let size = 0
          readStream.on('data', (chunk) => {
            chunks.push(chunk)
            size += chunk.length
          })
          readStream.on('end', () => {
            let buffer = Buffer.concat(chunks, size)
            let contentStr = iconv.decode(buffer, 'utf8')
            resolve(contentStr)
          })
          readStream.on('error', (e) => {
            this.done(e)
          })
          break
        default:
          return this.done(new Error('read() input is invalid, supported list: a HTML file path and Node Readable Stream.'))
      }
    })
  }

  _getDom (html) {
    return new Promise((resolve, reject) => {
      let dom = new JSDOM(html)
      resolve(dom)
    })
  }

  _getSummary (dom) {
    return new Promise((resolve, reject) => {
      let summary = []
      _.forEach(this.rules, (options, name) => {
        let ruleObj
        if (_.has(options, ['object'])) {
          ruleObj = options.object
        } else {
          ruleObj = this.ruleFactory.create(name, options, this.done)
        }
        let report = ruleObj.check(dom)
        if (report) {
          summary.push(report)
        }
      })
      resolve(summary)
    })
  };

  _output (summary) {
    return new Promise((resolve, reject) => {
      let contentStr = ''
      if (summary && summary.length > 0) {
        contentStr = 'SEO defects found: \n' + summary.join('\n') + '\n'
      } else {
        contentStr = 'No any SEO defect found. \n'
      }
      let type = this.output.constructor.name
      switch (type) {
        case 'String':
          const filePath = this.output
          fs.writeFile(filePath, contentStr, (err) => {
            if (err) return this.done(err)
          })
          break
        case 'WriteStream':
          const writeStream = this.output
          writeStream.write(contentStr, (err) => {
            if (err) return this.done(err)
          })
          writeStream.on('error', (e) => {
            this.done(e)
          })
          break
        case 'Console':
        case null:
          console.log(contentStr)
          break
        default:
          return this.done(new Error('"output" option is invalid, supported list: a file path, Node Writable Stream and console.'))
      }
      resolve(contentStr)
      return this.done(null, contentStr)
    })
  }
}

export default SeoInspector
