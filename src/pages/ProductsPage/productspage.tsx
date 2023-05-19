import React from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { useGetProductsQuery } from 'services/blackMarketApi';
import ProductList from 'components/ProductList';
import Filters from 'components/Filters';
import Filter from 'components/shared/Icons/Filter';

const ProductsPage = () => {
  const { data, error, isLoading } = useGetProductsQuery({});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    if ('message' in error) {
      return <div>Error: {error.message}</div>;
    }
  }

  const products = data?.results?.slice(0, 7).map((product) => ({
    name: product.name,
    image: product.product_picture,
    price: Number(product.unit_price),
    isRestored: product.state === 'R',
  }));

  return (
    <div className='bg-background'>
      <Header />
      <div className='flex flex-row md:ml-28 md:mt-24'>
        <div className='hidden lg:block'>
          <Filters />
        </div>
        <ProductList products={products || []} />
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
