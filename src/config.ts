import {readFileSync} from 'fs';
import {load} from 'js-yaml';

const fileContents = readFileSync('./config.yml', 'utf8');
const config: any = load(fileContents);

export const LOGGER_CONFIG = config.application.logger;
export const EXPRESS_CONFIG = config.application.express;


