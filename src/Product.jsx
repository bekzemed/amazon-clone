import React from 'react';
import styled from 'styled-components';

const Product = () => {
  return (
    <Container>
      <Title>Ipad Pro</Title>
      <Price>$1449</Price>
      <Rating>⭐️⭐️⭐️⭐️⭐️</Rating>
      <Image src="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SX342_.jpg" />
      <ActionSection>
        <AddToCartButton>Add To Cart</AddToCartButton>
      </ActionSection>
    </Container>
  );
};

export default Product;

const Container = styled.div`
  background-color: white;
  max-height: 400px;
  z-index: 1;
  flex: 1;
  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span``;

const Price = styled.span`
  font-weight: bold;
  margin-top: 3px;
`;

const Rating = styled.div``;

const Image = styled.img`
  max-height: 200px;
  object-fit: contain;
`;

const AddToCartButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #f0c14b;
  border: 2px solid #a88734;
  border-radius: 2px;
`;

const ActionSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px;
`;
