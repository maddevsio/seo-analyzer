import titleLengthRule from './TitleLengthRule';
import noTooManyStrongTagsRule from './NoTooManyStrongTagsRule';
import noMoreThanOneH1TagRule from './NoMoreThanOneH1TagRule';
import imgTagWithAltAttritubeRule from './ImgTagWithAltAttritubeRule';
import aTagWithRelAttritubeRule from './ATagWithRelAttritubeRule';
import canonicalLinkRule from './CanonicalLinkRule';
import metaBaseRule from './MetaBaseRule';
import metaSocialRule from './MetaSocialRule';

const defaultRules = {
  titleLengthRule,
  noTooManyStrongTagsRule,
  noMoreThanOneH1TagRule,
  imgTagWithAltAttritubeRule,
  aTagWithRelAttritubeRule,
  canonicalLinkRule,
  metaBaseRule,
  metaSocialRule
};

export default defaultRules;
