import express, {Router} from 'express';
import {TestController} from '../controller';
import {AuthMiddleware} from '../middleware';

export default class TestRoute {
    private static _router: Router;

    private static setRouter = async () => {
      TestRoute._router = express.Router();
      TestRoute._router.get('/auth', AuthMiddleware.accessTokenMiddleware, TestController.test);
      TestRoute._router.get('/', TestController.test);
    }

    public static get router() : Router {
      if (TestRoute._router == undefined) {
        TestRoute.setRouter();
      }
      return TestRoute._router;
    }
}
