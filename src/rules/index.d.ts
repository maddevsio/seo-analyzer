export default defaultRules;
declare namespace defaultRules {
    export { titleLengthRule };
    export { imgTagWithAltAttributeRule };
    export { aTagWithRelAttributeRule };
    export { canonicalLinkRule };
    export { metaBaseRule };
    export { metaSocialRule };
}
import titleLengthRule from './TitleLengthRule';
import imgTagWithAltAttributeRule from './ImgTagWithAltAttributeRule';
import aTagWithRelAttributeRule from './ATagWithRelAttributeRule';
import canonicalLinkRule from './CanonicalLinkRule';
import metaBaseRule from './MetaBaseRule';
import metaSocialRule from './MetaSocialRule';
