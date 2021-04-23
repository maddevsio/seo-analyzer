'use strict'

import _ from 'lodash'

import ImgTagWithAltAttritubeRule from './rules/ImgTagWithAltAttritubeRule'
import ATagWithRelAttritubeRule from './rules/ATagWithRelAttritubeRule'
import HeadTagWithTitleAndDescriptionsKeywordsMetaRule from './rules/HeadTagWithTitleAndDescriptionsKeywordsMetaRule'
import NoTooManyStrongTagsRule from './rules/NoTooManyStrongTagsRule'
import NoMoreThanOneH1TagRule from './rules/NoMoreThanOneH1TagRule'

class RuleFactory {
  constructor () {
    this.rules = {
      'ImgTagWithAltAttritube': { enabled: 1 },
      'ATagWithRelAttritube': { enabled: 1 },
      'HeadTagWithTitleAndDescriptionsKeywordsMeta': { enabled: 1 },
      'NoTooManyStrongTags': { enabled: 1, threshold: 15 },
      'NoMoreThanOneH1Tag': { enabled: 1 }
    }
  }

  create (name, options, done) {
    let opts = (_.has(this.rules, name) && !options) ? _.get(this.rules, [name]) : options
    switch (name) {
      case 'ImgTagWithAltAttritube':
        return new ImgTagWithAltAttritubeRule(opts)
      case 'ATagWithRelAttritube':
        return new ATagWithRelAttritubeRule(opts)
      case 'HeadTagWithTitleAndDescriptionsKeywordsMeta':
        return new HeadTagWithTitleAndDescriptionsKeywordsMetaRule(opts)
      case 'NoTooManyStrongTags':
        return new NoTooManyStrongTagsRule(opts)
      case 'NoMoreThanOneH1Tag':
        return new NoMoreThanOneH1TagRule(opts)
      default:
        return done(new Error('Failed to init rule object due to invalid rule name.'))
    }
  }

  getDefaultRules () {
    return this.rules
  }
}

export default RuleFactory
