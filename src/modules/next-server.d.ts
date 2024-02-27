export default NextServer;
declare class NextServer {
    logger: Logger;
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
import Logger from './logger';
import Input from './input';
