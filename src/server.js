import express from 'express';
import path from 'path';
import Logger from './modules/logger';

const app = express();

/**
 * Start the server on the given port and use static files from the given path.
 * @param {String} folder - The path to the static files.
 * @param {Number} port - The port to start the server on.
 */
export function startServer(folder, port) {
  const logger = new Logger();

  app.use(express.static(folder));

  // sendFile will go here
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

  app.listen(port);

  logger.info(`🚀  Server started on port ${port}\n`);

  logger.success('✅  Done\n');
}
