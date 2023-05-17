import Product, { ProductVariants } from 'components/Product';
import React from 'react';

export interface CarouselProps {
  products: ProductVariants[];
}

const Carousel: React.FC<CarouselProps> = ({ products }) => (
  <div className='flex h-auto w-full gap-6 overflow-x-scroll px-6 py-4 lg:justify-center'>
    {products.map((product, index) => (
      <Product key={index} product={product} className='' />
    ))}
  </div>
);

export default Carousel;
