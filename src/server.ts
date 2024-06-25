import express from 'express';

import routes from './routes';
import './database';

const app = express();

const port = 3333;

app.use(routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
