import express from 'express';
import Products from '../services/products';

const router = express.Router();

const products = new Products();

router.get('/:id?', async (req, res, next) => {
  console.log(`GET PRODUCTS ${req.params.id}`, req.query);

  try {
    const productData = await products.getProducts(req.params.id, {
      brand: req.query.brand,
      categories: req.query.categories,
      page: req.query.page,
    });

    return res.json({
      products: productData,
    });
  } catch (err) {
    return res.status(500).json({
      error: 'Generic server error',
      message: err.message,
    });
  }
});

export default router;
