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
  <div className='flex h-96 w-64 flex-col items-start overflow-hidden rounded-lg bg-white shadow-md'>
    <img src={product.image} alt={product.name} className='h-64 w-full' />
    <div className='flex h-32 w-full flex-col justify-between p-4'>
      <div className='flex items-start justify-between'>
        <p className='text-lg'>${product.price}</p>
        <span
          className={`rounded px-2 py-1 text-xs text-white ${
            product.isRestored ? 'bg-green-500' : 'bg-blue-500'
          }`}
        >
          {product.isRestored ? 'Restored' : 'New'}
        </span>
      </div>
      <div className='flex items-center justify-between'>
        <h2>{product.name}</h2>
        <Heart className={'text-black'} />
      </div>
    </div>
  </div>
);

export default Product;
