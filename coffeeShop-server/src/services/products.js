import mongoose from 'mongoose';

import { getProducts } from '../models/products';

export default class Products {
  async getProducts(productId, additionalParams) {
    return getProducts(productId, additionalParams);
  }
}
