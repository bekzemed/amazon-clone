import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product';
import { db } from './firebase';

const Home = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    let tempProducts = [];
    db.collection('products').onSnapshot(snapshot => {
      tempProducts = snapshot.docs.map(doc => ({
        id: doc.id,
        product: doc.data(),
      }));

      setProducts(tempProducts);
    });
  };

  useEffect(() => {
    getProducts();
    console.log('hello');
  }, []);

  return (
    <Container>
      <Banner></Banner>
      <Content>
        {products.map(product => (
          <Product key={product.id} product={product.product} id={product.id} />
        ))}
        {/* <Product />
        <Product /> */}
      </Content>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  max-width: 1500px;
  margin: auto;
`;

const Banner = styled.div`
  background-image: url('https://i.imgur.com/SYHeuYM.jpg');
  min-height: 600px;
  background-position: center;
  background-size: cover;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const Content = styled.div`
  padding-right: 10px;
  padding-left: 10px;
  margin-top: -350px;
  display: flex;
`;
