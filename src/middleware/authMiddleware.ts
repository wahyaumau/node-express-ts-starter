import {NextFunction, Request, Response} from 'express';
import {ApiResponse} from '../model';


export default class AuthMiddleware {
  public static getAuthMethod = (req: Request) => {
    let {auth = 'bearer'} = req.query;
    if (auth != 'bearer' && auth != 'cookie') {
      auth = 'bearer';
    }
    return auth;
  }
  public static accessTokenMiddleware = (req: Request, res: Response, next : NextFunction) => {
    switch (AuthMiddleware.getAuthMethod(req)) {
      case 'cookie': {
        if (req.cookies.JWT) {
          return next();
        } else {
          const response = new ApiResponse(400, 'JWT cookie is not provided');
          return response.sendResponse(res);
        }
      }
      case 'bearer': {
        if (req.headers.authorization) {
          if (req.headers.authorization.startsWith('Bearer')) {
            return next();
          } else {
            const response = new ApiResponse(400, 'Authorization header must start with Bearer');
            return response.sendResponse(res);
          }
        } else {
          const response = new ApiResponse(400, 'Authorization header is not provided');
          return response.sendResponse(res);
        }
      }
    }
  }
}
