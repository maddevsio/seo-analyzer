import { JSDOM } from 'jsdom';

export interface ISeoAnalyzerOptions {
  verbose?: boolean;
}

export interface IResult {
  source: string;
  report: string[];
}

export type TRuleFunc = (dom: JSDOM, options?: any) => Promise<string[] | []>;

export interface IRule {
  rule: TRuleFunc;
  options?: any;
}

export interface IInputData {
  source: string;
  dom: JSDOM;
}

export interface IInputHtml {
  source: string;
  text: string;
}
