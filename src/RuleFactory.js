'use strict'

import _ from 'lodash'

import ImgTagWithAltAttritubeRule from './rules/ImgTagWithAltAttritubeRule'
import ATagWithRelAttritubeRule from './rules/ATagWithRelAttritubeRule'
import HeadTagWithTitleAndDescriptionKeywordsMetaRule from './rules/HeadTagWithTitleAndDescriptionKeywordsMetaRule'
import NoTooManyStrongTagsRule from './rules/NoTooManyStrongTagsRule'
import NoMoreThanOneH1TagRule from './rules/NoMoreThanOneH1TagRule'
import TitleLengthRule from './rules/TitleLengthRule'

class RuleFactory {
  constructor () {
    this.rules = {
      'ImgTagWithAltAttritube': { enabled: 1 },
      'ATagWithRelAttritube': { enabled: 1 },
      'HeadTagWithTitleAndDescriptionKeywordsMeta': { enabled: 1 },
      'NoTooManyStrongTags': { enabled: 1, threshold: 15 },
      'NoMoreThanOneH1Tag': { enabled: 1 },
      'TitleLength': { enabled: 1, max: 60 },
    }
  }

  create (name, options, done) {
    let opts = (_.has(this.rules, name) && !options) ? _.get(this.rules, [name]) : options
    switch (name) {
      case 'ImgTagWithAltAttritube':
        return new ImgTagWithAltAttritubeRule(opts)
      case 'ATagWithRelAttritube':
        return new ATagWithRelAttritubeRule(opts)
      case 'HeadTagWithTitleAndDescriptionKeywordsMeta':
        return new HeadTagWithTitleAndDescriptionKeywordsMetaRule(opts)
      case 'NoTooManyStrongTags':
        return new NoTooManyStrongTagsRule(opts)
      case 'NoMoreThanOneH1Tag':
        return new NoMoreThanOneH1TagRule(opts)
      case 'TitleLength':
        return new TitleLengthRule(opts)
      default:
        return done(new Error('Failed to init rule object due to invalid rule name.'))
    }
  }

  getDefaultRules () {
    return this.rules
  }
}

export default RuleFactory
