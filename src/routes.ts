import { Router } from 'express';

const routes = Router();

import UserController from './controllers/UserController';
import SurveysController from './controllers/SurveysController';

const userController = new UserController();
const surveysController = new SurveysController();

routes.post('/users', userController.create);

routes.post('/surveys', surveysController.create);
routes.get('/surveys', surveysController.show);

export default routes;
