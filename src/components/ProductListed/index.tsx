import React from 'react';
import Heart from 'components/shared/Icons/Heart';
import Button, { ButtonSize, ButtonVariants } from 'components/shared/Buttons';
import { Condition, ConditionTypes, conditionMapping } from 'types/conditionTypes';

export interface ProductListedVariants {
  name: string;
  image: string;
  price: number;
  condition: Condition;
}

interface ProductListedProps {
  product: ProductListedVariants;
  className?: string;
}

const ProductListed: React.FC<ProductListedProps> = ({ product }) => (
  <div className='z-10 flex h-28 w-80 shrink-0 items-start overflow-hidden rounded-t-lg border-[1px] border-b-grey bg-white shadow-md md:rounded-lg md:border-0 lg:h-44 lg:w-full'>
    <div className='h-28 w-28 lg:h-44 lg:w-48'>
      <img src={product.image} alt={product.name} />
    </div>
    <div className='mt-4 ml-6 flex w-full justify-between lg:mt-10 lg:ml-10'>
      <div>
        <p className='text-xs font-semibold lg:text-base'>{product.name}</p>
        <span
          className={`rounded px-2 py-1 text-xs text-white ${
            product.condition === conditionMapping.Restored
              ? 'bg-green-500'
              : product.condition === conditionMapping.New
              ? 'bg-blue-500'
              : 'bg-indigo-600'
          }`}
        >
          {product.condition === conditionMapping.Restored
            ? ConditionTypes.Restored
            : product.condition === conditionMapping.New
            ? ConditionTypes.New
            : ConditionTypes.Used}
        </span>
        <p className='mt-3 text-sm font-semibold md:text-lg md:font-medium lg:mt-5'>
          ${product.price}
        </p>
      </div>
      <div className='mr-4 flex flex-col items-end lg:mr-8 lg:items-center'>
        <Heart className={'mb-8 text-black'} />
        <div className='hidden lg:block'>
          <Button variant={ButtonVariants.Primary} size={ButtonSize.Default}>
            Add to cart
          </Button>
        </div>
        <div className='block lg:hidden'>
          <Button variant={ButtonVariants.Primary} size={ButtonSize.Thin}>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default ProductListed;
