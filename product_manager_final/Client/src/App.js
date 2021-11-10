import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './views/Main'
import './App.css';
import ProductList from './components/ProductList';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/api/products">
          <Main />
        </Route>
        <Route exact path= "/api/products/:id">
          <Detail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
          
    
