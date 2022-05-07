import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

import { APP_PORT } from './config/app';
import { connectToMongoose } from './models/products';

import productsRoutes from './routes/products-route';

(async function runServer() {
  const app = express();

  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(morgan('combined'));

  connectToMongoose();

  app.use('/shop', productsRoutes);

  const server = app.listen(APP_PORT, () => {
    console.log(`Listening on port ${server.address().port}`);
  });
})();
