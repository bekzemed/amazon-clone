import './App.css';
import Cart from './Cart/Cart';
import Header from './Home/Header';
import Home from './Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { db, auth } from './firebase';
import Login from './auth/Login';

function App() {
  const userLocalStorage = JSON.parse(localStorage.getItem('user'));
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(userLocalStorage);

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

  const signOut = () => {
    auth.signOut().then(() => {
      setUser(null);
      localStorage.removeItem('user');
    });
  };

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <Router>
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <Container>
          <Header user={user} signOut={signOut} cartItems={cartItems} />
          <Switch>
            <Route path="/cart">
              <Cart cartItems={cartItems} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      )}
    </Router>
  );
}

export default App;

const Container = styled.div`
  background-color: #eaeded;
`;
