import React from 'react';
import style from 'styled-components';
import { Search, ShoppingBasket, LocationOn } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Container>
      <HeaderLogo>
        <Link to="/">
          <img
            src="https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"
            alt="amazon"
          />
        </Link>
      </HeaderLogo>
      <HeaderOptionAdress>
        <LocationOn />
        <HeaderOption>
          <OptionLineOne>Hello</OptionLineOne>
          <OptionLineTwo>Select your address</OptionLineTwo>
        </HeaderOption>
      </HeaderOptionAdress>

      <HeaderSearch>
        <HeaderSearchInput type="text" />
        <HeaderSearchIconContainer>
          <Search />
        </HeaderSearchIconContainer>
      </HeaderSearch>

      <HeaderNavItem>
        <HeaderOption>
          <OptionLineOne>Hello, Nazariy</OptionLineOne>
          <OptionLineTwo>Account & Lists</OptionLineTwo>
        </HeaderOption>

        <HeaderOption>
          <OptionLineOne>Returns</OptionLineOne>
          <OptionLineTwo>& Orders</OptionLineTwo>
        </HeaderOption>

        <HeaderOptionCart>
          <Link to="/cart">
            <ShoppingBasket />
            <CartCount>4</CartCount>
          </Link>
        </HeaderOptionCart>
      </HeaderNavItem>
    </Container>
  );
};

export default Header;

const Container = style.div`
  height: 60px;
  background-color: #0F1111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white
`;

const HeaderLogo = style.div`
  img {
    display: flex;
    align-items: center;
    width: 100px;
    margin-left: 11px
  }
`;

const HeaderOptionAdress = style.div`
  display: flex;
  align-items: center;
  padding-left: 9px;
`;

const OptionLineOne = style.div`
  display: block
`;

const OptionLineTwo = style.div`
  font-weight: 700;
  display: block
`;

const HeaderSearch = style.div`
  display: flex;
  flex-grow: 1;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
  margin-left: 4px;
  background-color: white;
  :focus-within {
   box-shadow: 0 0 0 3px #F90;
  }
`;

const HeaderSearchInput = style.input`
  flex-grow: 1;
  border: 0;
  font-size: 16px;
  :focus {
    outline: none
  }
`;

const HeaderSearchIconContainer = style.div`
  background-color: #febd69;
  color: black;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer
`;

const HeaderNavItem = style.div`
  display: flex;
  align-items: center;
`;

const HeaderOption = style.div`
  padding: 10px 9px;


`;

const HeaderOptionCart = style.div`
  display: flex;
  padding-right: 9px;

  a {
    display: flex;
    text-decoration: none;
    color: white
  }
`;

const CartCount = style.div`
  padding-left: 4px;
`;
