import {Request, Response} from 'express';
import {ApiResponse} from '../model';

export default class TestController {
    public static test = (req: Request, res: Response) => {
      try {
        const response = new ApiResponse(200, 'success');
        return response.sendResponse(res);
      } catch (error) {
        const response = new ApiResponse(500, 'Internal Server Error');
        return response.sendResponse(res);
      }
    }
}
