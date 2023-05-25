import ProductCarousel, { ProductVariants } from 'components/ProductCarousel';
import React from 'react';

export interface CarouselProps {
  products: ProductVariants[];
}

const Carousel: React.FC<CarouselProps> = ({ products }) => (
  <div className='flex h-auto w-full gap-6 overflow-x-scroll px-6 py-4 lg:justify-center'>
    {products.map((product, index) => (
      <ProductCarousel key={index} product={product} />
    ))}
  </div>
);

export default Carousel;
