export default Output;
declare class Output {
    constructor(logger: any);
    analyzer: Analyzer;
    /**
     * @param {Array} data - List of files and folders
     * @param {Array} rules - List of rules
     * @returns {Promise} - Returns js object [{file, report}, ...]
     */
    object(inputData: any, rules: any[]): Promise<any>;
    /**
     * @param {Array} data - List of files and folders
     * @param {Array} rules - List of rules
     * @returns {JSON} - Returns json [{"file", "report"}, ...]
     */
    json(inputData: any, rules: any[]): JSON;
}
import Analyzer from './analyzer';
