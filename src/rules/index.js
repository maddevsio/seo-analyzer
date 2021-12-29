import titleLengthRule from './TitleLengthRule';
import noTooManyStrongTagsRule from './NoTooManyStrongTagsRule';
import imgTagWithAltAttritubeRule from './ImgTagWithAltAttritubeRule';
import aTagWithRelAttritubeRule from './ATagWithRelAttritubeRule';
import canonicalLinkRule from './CanonicalLinkRule';
import metaBaseRule from './MetaBaseRule';
import metaSocialRule from './MetaSocialRule';

const defaultRules = {
  titleLengthRule,
  noTooManyStrongTagsRule,
  imgTagWithAltAttritubeRule,
  aTagWithRelAttritubeRule,
  canonicalLinkRule,
  metaBaseRule,
  metaSocialRule
};

export default defaultRules;
