'use strict'

class BaseRule {
  constructor (options) {
    this.options = options
  }

  check (dom) {
    return new Error('check() is an abstract method that should be overrided for each Rule.')
  }
}

export default BaseRule
