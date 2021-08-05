import {getLogger, Logger} from 'log4js';
import {LOGGER_CONFIG} from '../config';

export default class LogUtil {
    private static _logger: Logger;

    private static setLogger = () : void => {
      LogUtil._logger = getLogger();
      LogUtil._logger.level = LOGGER_CONFIG.level;
    }

    public static get logger() : Logger {
      if (LogUtil._logger == undefined) {
        LogUtil.setLogger();
      }
      return LogUtil._logger;
    }
}
