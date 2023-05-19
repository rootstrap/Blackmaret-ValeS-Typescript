import Button, { ButtonSize, ButtonVariants } from 'components/shared/Buttons';
import InputField, { InputVariants } from 'components/shared/InputFields';
import React, { useState } from 'react';

const Filters: React.FC = () => {
  const [condition, setCondition] = useState('');
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const submitFilters = () => {
    const filters = {
      condition,
      category,
      price: { min: minPrice, max: maxPrice },
    };
    console.log(filters);
  };

  return (
    <div className='ml-8 flex w-64 flex-col'>
      <h1 className='mb-4 text-xl font-bold'>Filters</h1>
      <h2 className='mb-2 font-medium'>Condition</h2>
      <div className='mb-4 flex flex-col'>
        {['New', 'Used', 'Refurbished'].map((item, i) => (
          <label key={i} className='mt-3 inline-flex items-center'>
            <input
              type='radio'
              value={item}
              checked={condition === item}
              onChange={(e) => setCondition(e.target.value)}
              className='h-5 w-5 text-gray-600'
            />
            <span className='ml-2 text-gray-700'>{item}</span>
          </label>
        ))}
      </div>

      <h2 className='mb-2 mt-10 font-medium'>Category</h2>
      <InputField
        type='text'
        placeholder='Search category'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        variant={InputVariants.Simple}
        text={''}
      />
      <h2 className='mb-2 mt-14 font-medium'>Price</h2>
      <InputField
        type='text'
        placeholder='Type minimum'
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        variant={InputVariants.Simple}
        text={'Max'}
      />
      <InputField
        type='text'
        placeholder='Type maximum'
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        text={'Min'}
        variant={InputVariants.Simple}
      />
      <div className='mt-10'>
        <Button onClick={submitFilters} variant={ButtonVariants.Primary} size={ButtonSize.Medium}>
          See results
        </Button>
      </div>
    </div>
  );
};

export default Filters;
