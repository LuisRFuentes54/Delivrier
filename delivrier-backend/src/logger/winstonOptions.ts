import * as winston from 'winston';
import { consoleFormat, fileFormat } from './formatWinston';

export const WinstonOptions = {
      transports: [
        new winston.transports.Console({
          level: 'debug',
          format: consoleFormat,
        }),
        new winston.transports.File({
          level: 'debug',
          format: fileFormat,
          maxsize: 5120000,
          maxFiles: 5,
          filename: `./logs/logs.log`,
        }),
      ],
};