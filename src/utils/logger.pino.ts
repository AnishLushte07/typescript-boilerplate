import config from 'config';
import fs from 'fs';
import path from 'path';
import pino from 'pino';
// logs dir
const logDir: string = path.join(__dirname, config.get('log.dir'));

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

// Define log format
// const logFormat = winston.format.printf(({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`);

const logger = pino({
  name: 'app-name',
  level: 'debug',
});

export { logger };
