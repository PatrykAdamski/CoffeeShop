import express from 'express';
import bodyParser from 'body-parser';

import productsRoutes from './routes/products-route';

const app = express();

app.use('/shop', productsRoutes);

app.listen(5000);
