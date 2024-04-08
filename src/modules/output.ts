import Analyzer from './analyzer';
import { IRule, IResult, IInputData } from '../interfaces';
import Logger from './logger';

class Output {
  analyzer: Analyzer;
  constructor(logger: Logger) {
    this.analyzer = new Analyzer(logger);
  }

  /**
   * @param {Array} data - List of files and folders
   * @param {Array} rules - List of rules
   * @returns {Promise} - Returns js object [{source, report}, ...]
   */
  public async object(
    inputData: IInputData[],
    rules: IRule[]
  ): Promise<IResult[]> {
    const report = await this.analyzer.run(inputData, rules);
    return report;
  }

  /**
   * @param {Array} data - List of files and folders
   * @param {Array} rules - List of rules
   * @returns {JSON} - Returns json [{"source", "report"}, ...]
   */
  public async json(inputData: IInputData[], rules: IRule[]) {
    const report = await this.analyzer.run(inputData, rules);
    return JSON.stringify(report, null, 2);
  }
}

export default Output;
