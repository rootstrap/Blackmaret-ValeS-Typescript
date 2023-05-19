import ProductListed, { ProductListedVariants } from 'components/ProductListed';
import React from 'react';

export interface ProductListProps {
  products: ProductListedVariants[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => (
  <div className='flex h-auto w-full flex-col items-center overflow-x-scroll px-6 py-4 md:gap-6 lg:justify-center'>
    {products.map((product, index) => (
      <ProductListed key={index} product={product} />
    ))}
  </div>
);

export default ProductList;
