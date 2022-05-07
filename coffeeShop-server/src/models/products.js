import mongoose from 'mongoose';

import { PAGE_SIZE } from '../constants/db';

import { DB_ADDRESS, DB_NAME, DB_PORT } from '../config/db';

const connectToMongoose = async () => {
  const url = `mongodb://${DB_ADDRESS}:${DB_PORT}/${DB_NAME}`;

  await mongoose.connect(url, { useNewUrlParser: true });

  return mongoose.connection.db;
};

const productSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    brand: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    available: {
      required: true,
      type: Number,
    },
    unitPrice: {
      required: true,
      type: Number,
    },
    grammage: {
      required: true,
      type: Number,
    },
    img: {
      required: true,
      type: String,
    },
    isSale: {
      required: true,
      type: Boolean,
    },
    categories: {
      type: [String],
      enum: ['coffee beans', 'coffee powder'],
    },
  },
  { strict: 'throw' }
);

export const Product = mongoose.model('Product', productSchema);

export const getProducts = (
  productIds,
  { brand, categories, page = 0 } = {}
) => {
  const query = {};

  if (productIds !== 'all') {
    query._id = { $in: productIds };
  }

  if (brand) {
    query.brand = brand;
  }

  if (categories) {
    query.categories = { $all: categories.split(',') };
  }

  return Product.find(query)
    .limit(PAGE_SIZE)
    .skip(Number(page) * PAGE_SIZE)
    .exec();
};

export { connectToMongoose };
