import titleLengthRule from './TitleLengthRule';
import hTagsRule from './HTagsRule';
import noTooManyStrongTagsRule from './NoTooManyStrongTagsRule';
import imgTagWithAltAttritubeRule from './ImgTagWithAltAttritubeRule';
import aTagWithRelAttritubeRule from './ATagWithRelAttritubeRule';
import canonicalLinkRule from './CanonicalLinkRule';
import metaBaseRule from './MetaBaseRule';
import metaSocialRule from './MetaSocialRule';

const defaultRules = {
  titleLengthRule,
  hTagsRule,
  noTooManyStrongTagsRule,
  imgTagWithAltAttritubeRule,
  aTagWithRelAttritubeRule,
  canonicalLinkRule,
  metaBaseRule,
  metaSocialRule
};

export default defaultRules;
