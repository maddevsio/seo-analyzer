import titleLengthRule from './TitleLengthRule';
import metaDescriptionRule from './MetaDescriptionRule';
import imgTagWithAltAttributeRule from './ImgTagWithAltAttributeRule';
import aTagWithRelAttributeRule from './ATagWithRelAttributeRule';
import canonicalLinkRule from './CanonicalLinkRule';
import metaBaseRule from './MetaBaseRule';
import metaSocialRule from './MetaSocialRule';
import headingsStructureRule from './HeadingsStructureRule';
import singleH1Rule from './SingleH1Rule';
import faviconRule from './FaviconRule';
import httpsRule from './HttpsRule';
import imageOptimizationRule from './ImageOptimizationRule';
import jsonLdRule from './JsonLdRule';

const defaultRules = {
  titleLengthRule,
  metaDescriptionRule,
  imgTagWithAltAttributeRule,
  aTagWithRelAttributeRule,
  canonicalLinkRule,
  metaBaseRule,
  metaSocialRule,
  headingsStructureRule,
  singleH1Rule,
  faviconRule,
  httpsRule,
  imageOptimizationRule,
  jsonLdRule
};

export default defaultRules;
