import React from 'react';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';

const CartTotal = ({ getTotalPrice, getTotalCount }) => {
  return (
    <Container>
      <Subtotal>
        Subtotal ({getTotalCount()} items):{' '}
        <NumberFormat
          value={getTotalPrice()}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'}
        />
      </Subtotal>
      <CheckoutButton>Proceed to checkout</CheckoutButton>
    </Container>
  );
};

export default CartTotal;

const Container = styled.div`
  background-color: white;
  flex: 0.3;
  padding: 20px;
`;

const Subtotal = styled.h2`
  margin-bottom: 16px;
`;

const CheckoutButton = styled.button`
  background-color: #f0c14b;
  border: 2px solid #a88734;
  padding: 4px 8px;
  width: 100%;
  cursor: pointer;
  font-size: 16px;
  :hover {
    background: #ddb347;
  }
`;
