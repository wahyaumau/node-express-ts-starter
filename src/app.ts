import express, {NextFunction, Request, Response} from 'express';
import {LogUtil} from './util';
import {EXPRESS_CONFIG} from './config';
import cookieParser from 'cookie-parser';
import {ApiResponse} from './model';
import cors from 'cors';
import {TestRoute} from './route';


const main = async () => {
  const app = express();
  app.use(express.json());
  app.use(cookieParser());
  app.use(cors());
  app.use((req: Request, res: Response, next: NextFunction) => {
    LogUtil.logger.info(req.protocol + '://' + req.get('host') + req.originalUrl);
    return next();
  });
  app.use('/test', TestRoute.router);
  app.use((req: Request, res: Response) => {
    const response = new ApiResponse(404, `route ${req.originalUrl} not found`);
    return response.sendResponse(res);
  });
  app.listen(EXPRESS_CONFIG.port, EXPRESS_CONFIG.host, () => {
    LogUtil.logger.info(`Listening on ${EXPRESS_CONFIG.host}:${EXPRESS_CONFIG.port}`);
  });
};

main();
