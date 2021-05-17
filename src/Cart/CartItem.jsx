import React from 'react';
import styled from 'styled-components';
import { db } from '../firebase';

const CartItem = ({ id, item: { images, name, quantity, price } }) => {
  let options = [];

  for (let i = 1; i < Math.max(quantity + 1, 20); i++) {
    options.push(<option value={i}>Qty: {i} </option>);
  }

  const changeQuantity = newQuantity => {
    db.collection('cartitems')
      .doc(id)
      .update({
        quantity: parseInt(newQuantity),
      });
  };

  const handleClick = e => {
    e.preventDefault();
    db.collection('cartitems').doc(id).delete();
  };

  return (
    <Container>
      <ImageContainer>
        <img src={images} alt="Product" />
      </ImageContainer>
      <CartItemInfo>
        <CartItemInfoTop>
          {' '}
          <h2>{name}</h2>{' '}
        </CartItemInfoTop>
        <CartItemInfoBottom>
          <CartItemQuantityContainer>
            <select
              value={quantity}
              onChange={e => changeQuantity(e.target.value)}
            >
              {options}
            </select>
          </CartItemQuantityContainer>
          <CartItemDeleteContainer onClick={handleClick}>
            Delete
          </CartItemDeleteContainer>
        </CartItemInfoBottom>
      </CartItemInfo>

      <CartItemPrice>${price}</CartItemPrice>
    </Container>
  );
};

export default CartItem;

const Container = styled.div`
  padding: 12px 0;
  display: flex;
  border-bottom: 1px solid #ddd;
`;

const ImageContainer = styled.div`
  width: 180px;
  height: 180px;
  flex-shrink: 0;
  flex-grow: 0;
  margin-right: 16px;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const CartItemInfo = styled.div`
  flex-grow: 1;
`;

const CartItemInfoTop = styled.div`
  color: #007185;
  h2 {
    font-size: 18px;
  }
`;

const CartItemInfoBottom = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
`;

const CartItemQuantityContainer = styled.div`
  select {
    border-radius: 7px;
    background-color: #f0f2f2;
    padding: 8px;
    box-shadow: 0 2px 5px rgba(15, 17, 17, 0.15);
  }
`;

const CartItemDeleteContainer = styled.div`
  color: #007185;
  margin-left: 16px;
  cursor: pointer;
`;

const CartItemPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-left: 16px;
`;
