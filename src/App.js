import Header from 'Components/Common/Header/Header.component';
import HomePage from 'Pages/HomePage/Homepage.component';
import ShopPage from 'Pages/ShopPage/ShopPage.component';
import SignInAndSignUpPage from 'Pages/Sign-in-and-Sign-up-Page/Sign-in-and-Sign-up-Page.component';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const HatPage = () => {
  return (
    <h1>hat page</h1>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App; 
