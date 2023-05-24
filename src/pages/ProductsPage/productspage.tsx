import React, { useState } from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { useGetProductsQuery } from 'services/blackMarketApi';
import ProductList from 'components/ProductList';
import Filters from 'components/Filters';
import ReactPaginate from 'react-paginate';

export type FiltersType = {
  categories: string[];
  page: number | null;
  page_size: number | null;
  search: string;
  state: string;
  unit_price_min: number | null;
  unit_price_max: number | null;
};

const initialFilters: FiltersType = {
  categories: [],
  page: null,
  page_size: null,
  search: '',
  state: '',
  unit_price_min: null,
  unit_price_max: null,
};

const ProductsPage = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 3;
  const pagesVisited = pageNumber * productsPerPage;

  const [filters, setFilters] = useState<FiltersType>(initialFilters);

  const { data, error, isLoading } = useGetProductsQuery(filters);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    if (error && 'message' in error) {
      return <div>Error: {error.message}</div>;
    }
  }

  const products =
    data?.results?.slice(pagesVisited, pagesVisited + productsPerPage).map((product) => ({
      name: product.name,
      image: product.product_picture,
      price: Number(product.unit_price),
      condition: product.state,
    })) || [];

  const pageCount = Math.ceil((data?.results?.length || 0) / productsPerPage);

  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  return (
    <div className='bg-background'>
      <Header />
      <div className='flex flex-row md:mt-24 xl:mx-28'>
        <div className='mb-24 hidden lg:block'>
          <Filters filters={filters} setFilters={setFilters} />
        </div>
        <div className='flex w-full flex-col'>
          <ProductList products={products} />
          <ReactPaginate
            className='mb-24 mt-12 flex flex-row justify-around'
            previousLabel={'<  Previous Page'}
            nextLabel={'Next Page  >'}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={'pagination'}
            previousLinkClassName={'pagination__link'}
            nextLinkClassName={'pagination__link'}
            disabledClassName={'pagination__link--disabled'}
            activeClassName={'pagination__link--active font-bold'}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
