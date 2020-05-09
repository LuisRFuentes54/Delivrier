import * as winston from 'winston';

export const consoleFormat = winston.format.combine(
  winston.format.simple(), 
  winston.format.timestamp(), 
  winston.format.splat(), 
  winston.format.colorize(),
  winston.format.printf(msg => {
    return `[${new Date(msg.timestamp).toLocaleString()}] | ${msg.level} | Message: ${
      msg.message
    }`;
  }),
);

export const fileFormat = winston.format.combine(
  winston.format.simple(), 
  winston.format.timestamp(), 
  winston.format.splat(),
  winston.format.printf(msg => {
    return `[${new Date(
      msg.timestamp,
    ).toLocaleString()}] | ${msg.level.toUpperCase()} | Message: ${msg.message}`;
  }),
);