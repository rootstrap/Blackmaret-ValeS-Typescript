import Button, { ButtonSize, ButtonVariants } from 'components/shared/Buttons';
import InputField, { InputVariants } from 'components/shared/InputFields';
import React from 'react';
import { FiltersType } from 'pages/ProductsPage/productspage';
import { useGetCategoriesQuery } from 'services/blackMarketApi';
import { ConditionTypes } from 'types/conditionTypes';
import { useFilters } from './useFilters';

type Props = {
  filters: FiltersType;
  setFilters: (filters: FiltersType) => void;
};

const Filters: React.FC<Props> = ({ filters, setFilters }) => {
  const { setLocalFilters, resetFilters, isFilterApplied } = useFilters(filters, setFilters);

  const handleConditionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalFilters((prevFilters: FiltersType) => ({
      ...prevFilters,
      state: e.target.value as ConditionTypes,
    }));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocalFilters((prevFilters: FiltersType) => ({
      ...prevFilters,
      categories: [e.target.value],
    }));
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalFilters((prevFilters: FiltersType) => ({
      ...prevFilters,
      unit_price_min: parseFloat(e.target.value),
    }));
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalFilters((prevFilters: FiltersType) => ({
      ...prevFilters,
      unit_price_max: parseFloat(e.target.value),
    }));
  };

  const { data: categoryData } = useGetCategoriesQuery({ page: 1, page_size: 10 });

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
              checked={filters.state === item}
              onChange={handleConditionChange}
              className='h-5 w-5 text-gray-600'
            />
            <span className='ml-2 text-gray-700'>{item}</span>
          </label>
        ))}
      </div>

      <h2 className='mb-2 mt-10 font-medium'>Category</h2>
      <select
        className='h-11 w-full rounded-lg border border-dark-violet hover:border-hover focus:outline-dashed focus:outline-focus active:outline active:outline-1 active:outline-active-outline'
        value={filters.categories}
        onChange={handleCategoryChange}
      >
        <option value='All'>All</option>
        {categoryData?.results?.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <h2 className='mb-2 mt-14 font-medium'>Price</h2>
      <InputField
        type='text'
        placeholder='Type minimum'
        value={filters.unit_price_min?.toString() || ''}
        onChange={handleMinPriceChange}
        variant={InputVariants.Simple}
        text={'Min'}
      />
      <InputField
        type='text'
        placeholder='Type maximum'
        value={filters.unit_price_max?.toString() || ''}
        onChange={handleMaxPriceChange}
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
