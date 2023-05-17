import React from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Carousel from 'components/Carousel';
import { useGetProductsQuery } from 'services/blackMarketApi';

const Dashboard = () => {
  const { data, error, isLoading } = useGetProductsQuery({});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    if ('message' in error) {
      return <div>Error: {error.message}</div>;
    }
  }

  const products = data?.results?.slice(0, 4).map((product) => ({
    name: product.name,
    image: product.product_picture,
    price: Number(product.unit_price),
    isRestored: product.state === 'R',
  }));

  return (
    <div className='bg-background'>
      <Header />
      <div className='absolute z-0 hidden h-[17rem] w-full bg-black lg:block' />
      <Carousel products={products || []} />
      <div style={{ backgroundColor: '#F4F7FA', height: 'calc(100vh - 100px)' }} />
      <Footer />
    </div>
  );
};

export default Dashboard;
