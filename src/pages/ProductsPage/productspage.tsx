import React, { useState } from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { useGetProductsQuery } from 'services/blackMarketApi';
import ProductList from 'components/ProductList';
import Filters from 'components/Filters';
import ReactPaginate from 'react-paginate';

const ProductsPage = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 3;
  const pagesVisited = pageNumber * productsPerPage;

  const { data, error, isLoading } = useGetProductsQuery({});

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
      isRestored: product.state === 'R',
    })) || [];

  const pageCount = Math.ceil((data?.results?.length || 0) / productsPerPage);

  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  return (
    <div className='bg-background'>
      <Header />
      <div className='flex flex-row md:ml-28 md:mt-24'>
        <div className='hidden lg:block'>
          <Filters />
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
            activeClassName={'pagination__link--active'}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
