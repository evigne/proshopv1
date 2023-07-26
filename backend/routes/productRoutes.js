import express from 'express';
const router = express.Router();
import products from '../data/products.js';
import { getProducts, getProductById } from '../controllers/productController.js';

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

export default router;

/**
 * Old method before using contoller refer xx-depricated file
 */
// router.get(
//   '/',
//   asyncHandler(async (req, res) => {
//     // res.json(products);
//     const products = await Product.find({});
//     res.json(products);
//   })
// );

// router.get(
//   '/:id',
//   asyncHandler(async (req, res) => {
//     // const product = products.find((p) => p._id === req.params.id);
//     // res.json(product);
//     const product = await Product.findById(req.params.id);

//     if (product) {
//       res.json(product);
//     }
//     // res.status(404).json({ message: 'Product Not found' });
//     // Use Custom error handler
//     res.status(404);
//     throw new Error('Resource not found');
//   })
// );

// export default router;
