import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  res.json({ Message: 'hello world' });
});

export default routes;
