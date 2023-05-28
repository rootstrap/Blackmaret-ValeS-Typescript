import Button, { ButtonSize, ButtonVariants } from 'components/shared/Buttons';
import InputField, { InputVariants } from 'components/shared/InputFields';
import React, { useState, useEffect } from 'react';
import { FiltersType } from 'pages/ProductsPage/productspage';
import { useGetCategoriesQuery } from 'services/blackMarketApi';
import { Condition, conditionMapping, ConditionTypes } from 'types/conditionTypes';

type Props = {
  filters: FiltersType;
  setFilters: (filters: FiltersType) => void;
};

type Category = {
  id: number;
  name: string;
};

type CategoryData = {
  results?: Category[];
};

const Filters: React.FC<Props> = ({ filters, setFilters }) => {
  const [condition, setCondition] = useState<Condition>('');
  const [categories, setCategories] = useState(['All']);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const { data: categoryData = { results: [] } as CategoryData } = useGetCategoriesQuery({
    page: 1,
    page_size: 10,
  });

  useEffect(() => {
    const newFilters: FiltersType = {
      ...filters,
      categories: categories[0] !== 'All' ? categories : [],
      state: condition ? conditionMapping[condition] : '',
      unit_price_min: minPrice ? parseFloat(minPrice) : null,
      unit_price_max: maxPrice ? parseFloat(maxPrice) : null,
    };

    setFilters(newFilters);
  }, [condition, filters, categories, minPrice, maxPrice, setFilters]);

  const resetFilters = () => {
    setCondition('');
    setCategories(['All']);
    setMinPrice('');
    setMaxPrice('');
  };

  const isFilterApplied = () => {
    return condition !== '' || categories[0] !== 'All' || minPrice !== '' || maxPrice !== '';
  };

  return (
    <div className='ml-8 flex w-64 flex-col'>
      <h1 className='mb-4 text-xl font-bold'>Filters</h1>
      <h2 className='mb-2 font-medium'>Condition</h2>
      <div className='mb-4 flex flex-col'>
        {Object.values(ConditionTypes).map((item, i) => (
          <label key={i} className='mt-3 inline-flex items-center'>
            <input
              type='radio'
              value={item}
              checked={condition === item}
              onChange={(e) => setCondition(e.target.value as Condition)}
              className='h-5 w-5 text-gray-600'
            />
            <span className='ml-2 text-gray-700'>{item}</span>
          </label>
        ))}
      </div>

      <h2 className='mb-2 mt-10 font-medium'>Category</h2>
      <select
        className='h-11 w-full rounded-lg border border-dark-violet hover:border-hover focus:outline-dashed focus:outline-focus active:outline active:outline-1 active:outline-active-outline'
        value={categories}
        onChange={(e) => setCategories([e.target.value])}
      >
        <option value='All'>All</option>
        {categoryData.results?.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
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
        <Button
          onClick={resetFilters}
          disabled={!isFilterApplied()}
          variant={ButtonVariants.Primary}
          size={ButtonSize.Medium}
        >
          Clear filters
        </Button>
      </div>
    </div>
  );
};

export default Filters;
