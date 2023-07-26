import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

/** @description Fech all products
 * @route GET /api/products
 * @access Public
 */
const getProducts = asyncHandler(async (req, res) => {
  console.log('Entered Products');
  const products = await Product.find({});
  res.json(products);
});

/** @description Fech a Product By Id
 * @route GET /api/products/:id
 * @access Public
 */
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  }

  res.status(404);
  throw new Error('Resource not found');
});

export { getProducts, getProductById };
