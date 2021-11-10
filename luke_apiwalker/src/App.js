import React from 'react';
import './App.css';
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import Search from './components/Search';
import DisplayInfo from './components/Display';
// HOME ROUTE, AND ROUTE WITH NAME AND ID VARIABLES THAT WILL BE GIVEN THE VALUE OF WHATEVER IS ENTERED IN THE FORM
// PASS IN SEARCH TO BOTH ROUTES SO THE SEARCH FORM IS AVAILABLE ON BOTH ROUTES
// USE EXACT PATH TO AVOID CONFLICT, OTHERWISE THE LEAST SPECIFIC ROUTE TO MOST SPECIFIC(TOP TO BOTTOM)
function App() {
  return (
    <div className="App">
      <header style={{marginTop : "2em"}}>
        {/* SWITCH TAG HANDLES ROUTE SWITCHING, PARENT ELEMENT TO THE ROUTE ELEMENT */}
        <Switch>
          {/* INDEX ROUTE */}
          <Route exact path = "/">
            <Search />
          </Route>
          {/* SEARCH RESULT ROUTE */}
          <Route exact path = "/:name/:id">
            <Search />
            <DisplayInfo />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
