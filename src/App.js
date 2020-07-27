import HomePage from 'Pages/HomePage/Homepage.component';
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
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatPage} />
      </Switch>
    </div>
  );
}

export default App; 
