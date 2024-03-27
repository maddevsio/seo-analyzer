import * as jsdom from 'jsdom';
import { JSDOM } from 'jsdom';

declare function metaSocialRule(dom: any, options?: {
    properties: any[];
}): Promise<any>;

declare function metaBaseRule(dom: any, options?: {
    list: any[];
}): Promise<any>;

/**
 * Checks the presence and validity of the canonical link in the provided DOM.
 * @param {import('jsdom').JSDOM} dom The JSDOM object representing the HTML document.
 * @returns {Promise<string|null>} A promise that resolves with a string indicating an error message if
 * the canonical link is missing or invalid, otherwise resolves with null.
 */
declare function canonicalLinkRule(dom: jsdom.JSDOM): Promise<string | null>;

declare function ATagWithRelAttributeRule(dom: any): Promise<any>;

declare function imgTagWithAltAttributeRule(dom: any): Promise<any>;

declare function titleLengthRule(dom: any, options: any): Promise<any>;

declare class Scanner {
    constructor(logger: any);
    logger: any;
    consoleProgressBar: any;
    inputUrl: string;
    ignoreUrls: string;
    /**
     * @param {Number} port - Port for the server to listen on
     * @returns {Array} - Array of html doms
     * @description - Scrapes the site and returns the html doms
     */
    run(port: number, urls: any, sitemap: any): any[];
    /**
     * Get the links from the sitemap
     * @returns {Array} - Array of links
     * @description - Scrapes the sitemap and returns the links
     */
    _getLinksFromSitemap(sitemap: any): any[];
    /**
     * Formats the link to be used in axios
     * @param {String} link
     * @returns {String} - Formatted link > http://localhost:{port}/link
     */
    _formatLink(link: string): string;
    /**
     * Sleep for the given time in milliseconds
     * @param {Number} ms
     * @returns {Promise}
     */
    sleep(ms: number): Promise<any>;
    /**
     * Get the html doms from the links
     * @param {Array} links - Array of links
     * @returns {Array} - Array of html doms
     * @description - Scrapes the links and returns the html doms
     */
    _getHtmlDomFromLinks(links: any[]): any[];
}

type ListDom = Array<JSDOM>;
/**
 * @typedef {Array<JSDOM>} ListDom
 */
declare class Input {
    constructor(logger: any);
    logger: any;
    scraper: Scanner;
    consoleProgressBar: any;
    badType: string;
    emptyList: string;
    ignoreFolders: any[];
    ignoreFiles: any[];
    /**
     * Get the html from files
     * @param {Array<string>} files [<string>, <string>, ...]
     * @param ignoreFiles
     * @returns {Promise<ListDom>} [{ window: {}, document: {}, ... }, { window: {}, document: {}, ... }, ...]
     * @memberof Input
     */
    files(files?: Array<string>, ignoreFiles?: any[]): Promise<ListDom>;
    /**
     * Get the html from files in folders
     * @param {Array<string>} folders [<string>, <string>, ...]
     * @param ignoreFolders
     * @param ignoreFiles
     * @returns {Promise<ListDom>} [{ window: {}, document: {}, ... }, { window: {}, document: {}, ... }, ...]
     * @memberof Input
     */
    folders(folders?: Array<string>, ignoreFolders?: any[], ignoreFiles?: any[]): Promise<ListDom>;
    /**
     * Get the DOM from urls
     * @returns {Promise<ListDom>} [{ window: {}, document: {}, ... }, { window: {}, document: {}, ... }, ...]
     * @param port
     * @param ignoreUrls
     */
    spa(port: any, ignoreUrls: any[], sitemap: any): Promise<ListDom>;
    /**
     * Get all files from folders
     * @param {Array<string>} folders [<string>, <string>, ...]
     * @returns {Promise<Array<string>>} [<string>, <string>, ...]
     * @private
     * @example ['html', 'dist', 'src']
     */
    private _getFilesFromFolders;
    /**
     * Get files from folder
     * @param {string} folder
     * @returns {Promise<Array<string>>} [<string>, <string>, ...]
     * @private
     * @memberof Input
     */
    private _getFilesFromFolder;
    /**
     * Get the html from file
     * @param {Array<string>} files [<string>, <string>, ...]
     * @returns {Promise<Array<string>>} ['<html><body>...</body></html>', '<html><body>...</body></html>', ...]
     * @private
     * @memberof Input
     */
    private _getHtml;
    /**
     * Transform html to DOM
     * @param {Array<{text: string, source: string}>} list [{text: <string>, source: <string>}, {text: <string>, source: <string>}, ...]
     * @returns {Promise<ListDom>} [{ window: {}, document: {}, ... }, { window: {}, document: {}, ... }, ...]
     * @private
     */
    private getDom;
}

declare class NextServer {
    constructor(logger: any);
    logger: any;
    _input: Input;
    app: {};
    handle: {};
    status: {};
    port: number;
    setup(): Promise<void>;
    /**
     * Run Next js server
     * @returns {Promise<unknown>}
     */
    run(): Promise<unknown>;
    /**
     * Run server for next js.
     * Get the DOM from urls
     * @param {number} port
     * @param ignoreUrls
     * @returns {Promise<Promise.Array>}
     */
    inputSSR(port: number, ignoreUrls: any[], sitemap: any): Promise<Promise.Array>;
}

/**
 * Results returned by analyzer
 */
type AnalyzerResult$1 = Array<{
    source: string;
    report: string;
}>;
/**
 * Results returned by analyzer
 * @typedef {Array<{source: string, report: string}>} AnalyzerResult
 */
declare class Analyzer {
    constructor(logger: any);
    logger: any;
    consoleProgressBar: any;
    badType: string;
    emptyList: string;
    /**
     * Run analyzer for a list of doms
     * @param {JSDOM<array>} doms - The html dom list to run the rule on
     * @param {Array} rules - The rules to run
     * @returns {AnalyzerResult} - Array of error result [{ source, report }, { source, report }, { source, report }]
     */
    run(inputData: any, rules: any[]): AnalyzerResult$1;
    /**
     * @param {Array} dataList - html doms
     * @param {Array} rules - List rulers
     * @returns {AnalyzerResult} - Array of reports [{source, report}, {source, report}, {source, report}]
     */
    _startAnalyzer(dataList: any[], rules: any[]): AnalyzerResult$1;
    /**
     * Run analyzer for a single dom
     * @param {*} dom - The html dom element to run the rule on
     * @param {*} rules - The rules to run
     * @returns {Array<string>} - Array of error result ['error', 'error', 'error']
     */
    _analyzeDOM(dom: any, rules: any): Array<string>;
}

declare class Logger {
    /**
     * @param {string} level
     * @returns {Logger}
     */
    constructor(level: string);
    level: number;
    /**
     * Print formatted result to console
     * @param {Array} - Array of reports
     * @returns {Error} - Stop execution and print error
     */
    result(result: any, force?: boolean): Error;
    /**
     * Print error message to console
     * @param {String} - Message
     * @returns {String} - Print formatted message to console
     */
    error(error: any, exit: any): string;
    /**
     * Print success message to console
     * @param {String} - Message
     * @returns {String} - Print formatted message to console
     */
    success(success: any): string;
    /**
     * Print info message to console
     * @param {String} - Message
     * @returns {String} - Print formatted message to console
     */
    info(info: any): string;
    /**
     * Print beautiful message to console
     * @param {String} - Result message
     * @returns {String} - Print CFonts message to console
     */
    printTextToConsole(text: any): string;
    /**
     * @param {Array} - Array of reports
     * @returns {Error} - Stop execution and print error
     * @private
     * @memberof Logger
     * @description Print result message to console
     */
    private _logResult;
    /**
     * @param {String} - Error object
     * @returns {String} - Stop execution and print error
     * @private
     * @memberof Logger
     * @description Print error message to console
     */
    private _logError;
    /**
     * @param {String} - Error object
     * @returns {String} - Stop execution and print error
     * @private
     * @memberof Logger
     * @description Print error message to console
     */
    private _logInfo;
    /**
     * @param {String} - Message
     * @returns {String} - Print formatted message to console
     * @private
     * @memberof Logger
     */
    private _logSuccess;
}

declare class Output {
    constructor(logger: any);
    analyzer: Analyzer;
    /**
     * @param {Array} data - List of files and folders
     * @param {Array} rules - List of rules
     * @returns {Promise} - Returns js object [{source, report}, ...]
     */
    object(inputData: any, rules: any[]): Promise<any>;
    /**
     * @param {Array} data - List of files and folders
     * @param {Array} rules - List of rules
     * @returns {JSON} - Returns json [{"source", "report"}, ...]
     */
    json(inputData: any, rules: any[]): JSON;
}

type AnalyzerResult = AnalyzerResult$1;
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
    _nextServer: NextServer;
    _inputData: any[];
    _defaultRules: {
        titleLengthRule: typeof titleLengthRule;
        imgTagWithAltAttributeRule: typeof imgTagWithAltAttributeRule;
        aTagWithRelAttributeRule: typeof ATagWithRelAttributeRule;
        canonicalLinkRule: typeof canonicalLinkRule;
        metaBaseRule: typeof metaBaseRule;
        metaSocialRule: typeof metaSocialRule;
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
    outputObjectAsync(): Promise<AnalyzerResult$1>;
}

export { type AnalyzerResult, SeoAnalyzer as default };
