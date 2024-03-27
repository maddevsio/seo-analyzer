export default Output;
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
import Analyzer from './analyzer';
