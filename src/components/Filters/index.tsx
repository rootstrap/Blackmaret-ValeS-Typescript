import Button, { ButtonSize, ButtonVariants } from 'components/shared/Buttons';
import InputField, { InputVariants } from 'components/shared/InputFields';
import React, { useState } from 'react';
import { FiltersType } from 'pages/ProductsPage/productspage';

type Props = {
  filters: FiltersType;
  setFilters: (filters: FiltersType) => void;
};

const conditionMapping: { [key: string]: string } = {
  New: 'N',
  Used: 'U',
  Refurbished: 'A',
};

const Filters: React.FC<Props> = ({ filters, setFilters }) => {
  const [condition, setCondition] = useState<keyof typeof conditionMapping>('');
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const submitFilters = () => {
    const newFilters: FiltersType = {
      ...filters,
      categories: category ? [category] : [],
      state: condition ? conditionMapping[condition] : '',
      unit_price_min: minPrice ? parseFloat(minPrice) : null,
      unit_price_max: maxPrice ? parseFloat(maxPrice) : null,
    };

    setFilters(newFilters);
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
        text={'Min'}
      />
      <InputField
        type='text'
        placeholder='Type maximum'
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        text={'Max'}
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
