import express from 'express';
import products from './data/products.js';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import dotenv, { config } from 'dotenv';
dotenv.config();

import connectDB from './config/db.js';

const port = process.env.PORT || 8001;

connectDB(); //connect to mongoDB
const app = express();

app.get('/', (req, res) => {
  res.send('API is running.....');
});

/** Moving the product api productRoutes.js */
// app.get('/api/products', (req, res) => {
//   res.json(products);
// });

// app.get('/api/products/:id', (req, res) => {
//   const product = products.find((p) => p._id === req.params.id);
//   res.json(product);
// });

app.use('/api/products', productRoutes);
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`Server Running on Port ${port}`));
