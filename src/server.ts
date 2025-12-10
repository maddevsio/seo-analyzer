import express from 'express';
import path from 'path';
import Logger from './modules/logger';
import { Server } from 'http';

const app = express();

/**
 * Start the server on the given port and use static files from the given path.
 * @param {String} folder - The path to the static files.
 * @param {Number} port - The port to start the server on.
 * @returns {Server} The HTTP server instance.
 */
export function startServer(folder: string, port: number): Server {
  const logger = new Logger();

  app.use(express.static(folder));

  // sendFile will go here
  app.get('/', (_, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

  const server = app.listen(port);

  logger.info(`🚀  Server started on port ${port}\n`);

  logger.success('✅  Done\n');

  return server;
}

/**
 * Stop the server gracefully.
 * @param {Server} server - The HTTP server instance to close.
 * @returns {Promise<void>}
 */
export function stopServer(server: Server): Promise<void> {
  return new Promise((resolve, reject) => {
    server.close(err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}
