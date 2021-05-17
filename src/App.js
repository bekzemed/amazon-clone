import './App.css';
import Cart from './Cart';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { db } from './firebase';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
    db.collection('cartitems').onSnapshot(snapshot => {
      let tempCartItems = [];
      tempCartItems = snapshot.docs.map(doc => ({
        id: doc.id,
        product: doc.data(),
      }));
      setCartItems(tempCartItems);
    });
  };

  useEffect(() => {
    getCartItems();
  }, []);
  console.log(cartItems);

  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route
            exact
            path="/cart"
            component={() => <Cart cartItems={cartItems} />}
          />
          <Route exact path="/" component={Home} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
  background-color: #eaeded;
`;
