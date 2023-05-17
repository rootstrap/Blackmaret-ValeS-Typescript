import Product, { ProductVariants } from 'components/Product';
import React from 'react';

export interface CarouselProps {
  products: ProductVariants[];
}

const Carousel: React.FC<CarouselProps> = ({ products }) => (
  <div className='grid h-auto w-full grid-cols-3 overflow-x-auto py-4 pl-32 lg:w-auto lg:gap-x-20 lg:pl-32'>
    {products.map((product, index) => (
      <Product key={index} product={product} className='' />
    ))}
  </div>
);

export default Carousel;
