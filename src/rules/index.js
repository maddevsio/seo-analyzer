import titleLengthRule from './TitleLengthRule'
import hTagsRule from './HTagsRule'
import noTooManyStrongTagsRule from './NoTooManyStrongTagsRule'
import noMoreThanOneH1TagRule from './NoMoreThanOneH1TagRule'
import imgTagWithAltAttritubeRule from './ImgTagWithAltAttritubeRule'
import headTagWithTitleAndDescriptionKeywordsMetaRule from './HeadTagWithTitleAndDescriptionKeywordsMetaRule'
import aTagWithRelAttritubeRule from './ATagWithRelAttritubeRule'
import canonicalLinkRule from './CanonicalLinkRule'

const defaultRules = {
  titleLengthRule,
  hTagsRule,
  noTooManyStrongTagsRule,
  noMoreThanOneH1TagRule,
  imgTagWithAltAttritubeRule,
  headTagWithTitleAndDescriptionKeywordsMetaRule,
  aTagWithRelAttritubeRule,
  canonicalLinkRule
};

export default defaultRules;
