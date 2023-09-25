import winston from "winston";
import { CONFIG } from "../../test/resources/Config.js"

export const logger = winston.createLogger({
  level: CONFIG.logLevel,
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: CONFIG.logFileName }),
  ],
});