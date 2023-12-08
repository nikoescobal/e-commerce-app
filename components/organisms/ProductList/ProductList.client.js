// components/organisms/ProductList/ProductList.client.js
'use client';

import React from 'react';
import ProductList from './ProductList';

const ProductListClient = ({ category }) => {
  return <ProductList category={category} />;
};

export default ProductListClient;
