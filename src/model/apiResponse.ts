import {Response} from 'express';

export default class ApiResponse {
    code: number;
    message: string;
    data: any;

    constructor(code: number, message: string, data?:any) {
      this.code = code;
      this.message = message;
      this.data = data;
    }

    sendResponse(res: Response) {
      const responseData: any = {
        code: this.code,
        message: this.message,
      };
      if (this.data) {
        responseData.data = this.data;
      }
      return res.status(this.code).json(responseData);
    }
}
