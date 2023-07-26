/** This file is before adding controller productRoutes.js -
 * Handling all routes in routes folder without controllers
 *
 */

import express from 'express';
const router = express.Router();
import products from '../data/products.js';
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

router.get(
  '/',
  asyncHandler(async (req, res) => {
    // res.json(products);
    const products = await Product.find({});
    res.json(products);
  })
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    // const product = products.find((p) => p._id === req.params.id);
    // res.json(product);
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    }
    // res.status(404).json({ message: 'Product Not found' });
    // Use Custom error handler
    res.status(404);
    throw new Error('Resource not found');
  })
);

export default router;
