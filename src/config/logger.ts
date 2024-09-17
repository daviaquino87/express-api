// logger.ts
import winston from "winston";

const { combine, timestamp, printf, json, errors } = winston.format;

// Formato de log personalizado
const customFormat = printf(
  ({ level, message, timestamp, stack, ...metadata }) => {
    let msg = `${timestamp} [${level}]: ${stack || message}`;
    if (Object.keys(metadata).length > 0) {
      msg += ` | ${JSON.stringify(metadata)}`;
    }
    return msg;
  }
);

// Configuração do logger
const logger = winston.createLogger({
  level: "info", // Nível mínimo de log
  format: combine(
    timestamp(),
    errors({ stack: true }), // Para capturar pilhas de erros
    customFormat
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: "./logs/application.log",
      // filename: "/home/node/logs/application.log",
    }),
  ],
});

interface LogMetadata {
  [key: string]: any;
}

export class Logger {
  public static info(message: string, metadata?: LogMetadata) {
    logger.info(message, metadata);
  }

  public static warn(message: string, metadata?: LogMetadata) {
    logger.warn(message, metadata);
  }

  public static error(message: string, metadata?: LogMetadata) {
    logger.error(message, metadata);
  }
}
