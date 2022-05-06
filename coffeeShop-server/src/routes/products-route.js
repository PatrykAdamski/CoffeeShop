import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('GET Request in Products');
  res.json({ message: 'It works!' });
});

export default router;
