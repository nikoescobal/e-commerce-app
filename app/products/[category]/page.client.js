// app/products/[category]/page.client.js
'use client';

import React from 'react';
import { useRouter } from 'next/router';
import ProductList from '../../../components/organisms/ProductList/ProductList';

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;

  // Fetch products based on category
  // Replace this with your actual data fetching logic
  const products = getProductByCategory(category);

  return <ProductList products={products} />;
};

export default CategoryPage;

// Replace getProductByCategory with your actual data fetching logic
