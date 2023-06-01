import { useState, useEffect } from 'react';
import { FiltersType } from 'pages/ProductsPage/productspage';
import { conditionMapping } from 'types/conditionTypes';

const filtersInitialState: FiltersType = {
  categories: [],
  page: 1,
  page_size: 10,
  search: '',
  state: '',
  unit_price_min: null,
  unit_price_max: null,
};

export const useFilters = (
  initialFilters: FiltersType,
  setFilters: (filters: FiltersType) => void,
) => {
  const [localFilters, setLocalFilters] = useState<FiltersType>(initialFilters);

  useEffect(() => {
    const newFilters: FiltersType = {
      ...localFilters,
      categories: localFilters.categories[0] !== 'All' ? localFilters.categories : [],
      state: localFilters.state
        ? conditionMapping[localFilters.state as keyof typeof conditionMapping]
        : '',
      unit_price_min: localFilters.unit_price_min,
      unit_price_max: localFilters.unit_price_max,
    };

    setFilters(newFilters);
  }, [localFilters, setFilters]);

  const resetFilters = () => {
    setLocalFilters(filtersInitialState);
  };

  const isFilterApplied = () => {
    return (
      localFilters.state !== filtersInitialState.state ||
      localFilters.categories[0] !== filtersInitialState.categories[0] ||
      localFilters.unit_price_min !== filtersInitialState.unit_price_min ||
      localFilters.unit_price_max !== filtersInitialState.unit_price_max
    );
  };

  return { filters: localFilters, setLocalFilters, resetFilters, isFilterApplied };
};
