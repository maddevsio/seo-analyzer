import titleLengthRule from './TitleLengthRule';
import hTagsRule from './HTagsRule';
import noTooManyStrongTagsRule from './NoTooManyStrongTagsRule';
import noMoreThanOneH1TagRule from './NoMoreThanOneH1TagRule';
import imgTagWithAltAttritubeRule from './ImgTagWithAltAttritubeRule';
import headTagWithTitleAndDescriptionKeywordsMetaRule from './HeadTagWithTitleAndDescriptionKeywordsMetaRule';
import aTagWithRelAttritubeRule from './ATagWithRelAttritubeRule';
import canonicalLinkRule from './CanonicalLinkRule';
import metaBaseRule from './MetaBaseRule';
import metaSocialRule from './MetaSocialRule';

const defaultRules = {
  titleLengthRule,
  hTagsRule,
  noTooManyStrongTagsRule,
  noMoreThanOneH1TagRule,
  imgTagWithAltAttritubeRule,
  headTagWithTitleAndDescriptionKeywordsMetaRule,
  aTagWithRelAttritubeRule,
  canonicalLinkRule,
  metaBaseRule,
  metaSocialRule
};

export default defaultRules;
