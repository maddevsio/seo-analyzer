export default SeoAnalyzer;
export type AnalyzerResult = import('./modules/analyzer').AnalyzerResult;
/**
 * @typedef {import('./modules/analyzer').AnalyzerResult} AnalyzerResult
 */
declare class SeoAnalyzer {
    /**
     * @param {object} options - The options object.
     * @param {boolean} [options.verbose=true] - A flag indicating whether verbose mode is enabled.
     * @returns {SeoAnalyzer}
     */
    constructor({ verbose }: {
        verbose?: boolean;
    });
    _logger: Logger;
    _input: Input;
    _output: Output;
    _nextServer: import("./modules/next-server").default;
    _inputData: any[];
    _defaultRules: {
        titleLengthRule: typeof import("./rules/TitleLengthRule").default;
        imgTagWithAltAttributeRule: typeof import("./rules/ImgTagWithAltAttributeRule").default;
        aTagWithRelAttributeRule: typeof import("./rules/ATagWithRelAttributeRule").default;
        canonicalLinkRule: typeof import("./rules/CanonicalLinkRule").default;
        metaBaseRule: typeof import("./rules/MetaBaseRule").default;
        metaSocialRule: typeof import("./rules/MetaSocialRule").default;
    };
    _rules: any[];
    _ignoreFolders: any[];
    _ignoreFiles: any[];
    _ignoreUrls: any[];
    /**
     * List of files to ignore.
     * @param {Array<string>} files
     * @returns {SeoAnalyzer}
     */
    ignoreFiles(files: Array<string>): SeoAnalyzer;
    /**
     * List of directories to ignore.
     * @param {Array<string>} folders
     * @returns {SeoAnalyzer}
     */
    ignoreFolders(folders: Array<string>): SeoAnalyzer;
    /**
     * List of urls to be ignored
     * @param {Array<string>} urls to be ignored
     * @returns {SeoAnalyzer}
     */
    ignoreUrls(urls: Array<string>): SeoAnalyzer;
    /**
     * Files to analyze
     * @param {Array<string>} files
     * @returns {Promise<SeoAnalyzer>}
     */
    inputFiles(files: Array<string>): Promise<SeoAnalyzer>;
    /**
     * Directories to analyze
     * @param {Array<string>} folders
     * @returns {Promise<SeoAnalyzer>}
     */
    inputFolders(folders: Array<string>): Promise<SeoAnalyzer>;
    /**
     * Spa folder to analyze
     * @param {Array<string>} folder
     * @returns {Promise<SeoAnalyzer>}
     */
    inputSpaFolder(folder: Array<string>, sitemap?: string, port?: number): Promise<SeoAnalyzer>;
    /**
     * Scan Next server
     * @param {string} sitemap Path to sitemap in xml format
     * @param {number} port Port Next server listens on
     * @returns {Promise<SeoAnalyzer>}
     */
    inputNextJs(sitemap?: string, port?: number): Promise<SeoAnalyzer>;
    /**
     * Input plain HTML strings in {text, source} format to analyze
     * @param {Array<{text: string, source: string}>} inputHTMLs `text` is the plain html, `source` is an identifier such a URI
     * @returns {SeoAnalyzer}
     */
    inputHTMLStrings(inputHTMLs: Array<{
        text: string;
        source: string;
    }>): SeoAnalyzer;
    /**
     * Adds a rule to the SEO analyzer.
     * @param {string|Function} rule The default rule or a custom rule function.
     * @param {object} [options={}] Additional options for the rule.
     * @returns {this} The SEO analyzer instance for method chaining.
     */
    addRule(rule: string | Function, options?: object): this;
    /**
     * Logs object to console asynchronously and returns itself
     * @returns {SeoAnalyzer}
     */
    outputConsole(): SeoAnalyzer;
    /**
     * Returns itself and calls a callback on the output's json string
     * @param {function(string): void}
     * @returns {SeoAnalyzer}
     */
    outputJson(callback: any): SeoAnalyzer;
    /**
     * Returns the JSON output asynchronously
     * @returns {Promise<string>}
     */
    outputJsonAsync(): Promise<string>;
    /**
     * Returns itself and calls a callback on the output's object
     * @param {function(AnalyzerResult): void}
     * @returns {SeoAnalyzer}
     */
    outputObject(callback: any): SeoAnalyzer;
    /**
     * Returns the object asynchronously
     * @returns {Promise<AnalyzerResult>}
     */
    outputObjectAsync(): Promise<import("./modules/analyzer").AnalyzerResult>;
}
import Logger from './modules/logger';
import Input from './modules/input';
import Output from './modules/output';
