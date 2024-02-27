export default Analyzer;
/**
 * Results returned by analyzer
 */
export type AnalyzerResult = Array<{
    file: string;
    report: string;
}>;
/**
 * Results returned by analyzer
 * @typedef {Array<{file: string, report: string}>} AnalyzerResult
 */
declare class Analyzer {
    logger: Logger;
    consoleProgressBar: any;
    badType: string;
    emptyList: string;
    /**
     * Run analyzer for a list of doms
     * @param {JSDOM<array>} doms - The html dom list to run the rule on
     * @param {Array} rules - The rules to run
     * @returns {AnalyzerResult} - Array of error result [{ file, report }, { file, report }, { file, report }]
     */
    run(inputData: any, rules: any[]): AnalyzerResult;
    /**
     * @param {Array} dataList - html doms
     * @param {Array} rules - List rulers
     * @returns {AnalyzerResult} - Array of reports [{file, report}, {file, report}, {file, report}]
     */
    _startAnalyzer(dataList: any[], rules: any[]): AnalyzerResult;
    /**
     * Run analyzer for a single dom
     * @param {*} dom - The html dom element to run the rule on
     * @param {*} rules - The rules to run
     * @returns {Array<string>} - Array of error result ['error', 'error', 'error']
     */
    _analyzeDOM(dom: any, rules: any): Array<string>;
}
import Logger from './logger';
