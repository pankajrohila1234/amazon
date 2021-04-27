import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';
import Electronics from './Electronics';
import Books from './Books';
import Clothing from './Clothing';
import Jewellery from './Jewellery';
import Kitchen from './Kitchen';

const promise = loadStripe(
  'pk_test_51HpBneLWG1wLVULtY32U8qEnPPugkQuiFQNP7V7RRxqdTr1y21Oaza4rb10g2lwg1vRKfupwWYypuTh9R9pNKM1p00Zn8YOvTX'
);


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      // console.log(authUser);

      if (authUser)  {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [dispatch])

  return (
    <Router>
      <div className="app">
      
        <Switch>
          <Route path="/electronics">
            <Header />
            <Electronics />
          </Route>

          <Route path="/books">
            <Header />
            <Books />
          </Route>

          <Route path="/clothing">
            <Header />
            <Clothing />
          </Route>

          <Route path="/jewellery">
            <Header />
            <Jewellery />
          </Route>

          <Route path="/Kitchen">
            <Header />
            <Kitchen />
          </Route>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
