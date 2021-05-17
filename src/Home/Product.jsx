import React from 'react';
import styled from 'styled-components';
import { Star } from '@material-ui/icons';
import { db } from '../firebase';

const Product = ({ product: { name, price, rating, image }, id }) => {
  const addToCart = () => {
    const cartItem = db.collection('cartitems').doc(id);
    cartItem.get().then(doc => {
      if (doc.exists) {
        cartItem.update({ quantity: doc.data().quantity + 1 });
      } else {
        db.collection('cartitems').doc(id).set({
          name: name,
          images: image,
          price: price,
          quantity: 1,
        });
      }
    });
  };

  return (
    <Container>
      <Title>{name}</Title>
      <Price>${price}</Price>
      <Rating>
        {Array(rating)
          .fill()
          .map((_, index) => (
            <span key={index}>
              <Star />
            </span>
          ))}
      </Rating>
      <Image src={image} />
      <ActionSection>
        <AddToCartButton onClick={addToCart}>Add To Cart</AddToCartButton>
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

const Rating = styled.div`
  margin-bottom: 10px;
  color: #f0c14b;
`;

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
  cursor: pointer;
`;

const ActionSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px;
`;
