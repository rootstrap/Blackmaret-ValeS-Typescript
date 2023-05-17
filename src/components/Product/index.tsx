import React from 'react';
import Heart from 'components/shared/Icons/Heart';

export interface ProductVariants {
  name: string;
  image: string;
  price: number;
  isRestored: boolean;
}

interface ProductProps {
  product: ProductVariants;
  className?: string;
}

const Product: React.FC<ProductProps> = ({ product }) => (
  <div className='z-10 flex h-52 w-32 shrink-0 flex-col items-start overflow-hidden rounded-lg bg-white shadow-md md:h-96 md:w-64'>
    <img src={product.image} alt={product.name} className='h-32 w-36 md:h-64 md:w-full' />
    <div className='flex h-20 w-full flex-col justify-between border-t border-dark-grey p-2 md:h-32 md:p-4'>
      <div className='flex items-start justify-between'>
        <p className='text-sm font-semibold md:text-lg md:font-medium'>${product.price}</p>
        <span
          className={`rounded px-2 py-1 text-xs text-white ${
            product.isRestored ? 'bg-green-500' : 'bg-blue-500'
          }`}
        >
          {product.isRestored ? 'Restored' : 'New'}
        </span>
      </div>
      <div className='flex items-center justify-between text-sm font-semibold md:font-medium lg:text-base'>
        <h2>{product.name}</h2>
        <Heart className={'text-black'} />
      </div>
    </div>
  </div>
);

export default Product;
