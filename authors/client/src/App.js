// IMPORTS FOR APP.JS

import './App.css';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import AuthorList from './components/AuthorList';
import CreateAuthor from './components/CreateAuthor';
import ViewAuthor from './components/ViewAuthor';
import EditAuthor from './components/EditAuthor';

//WHERE EVERYTHING GETS DISPLAYED AND WHERE ALL FRONT END ROUTES ARE CREATED
// WHERE ALL COMPONENTS ARE IMPORTED FOR DISPLAY

function App() {
  return (
    <div className="App">
      
      <h1>Favorite Authors</h1>
      <Link to = "/author/create">Add an author</Link> | <Link to ="/">Home</Link>
      
      <Switch>
        <Route exact path = "/author/update/:id">
          <EditAuthor />
        </Route>
        
        <Route exact path = "/author/create">
          <CreateAuthor />
        </Route>
        
        <Route exact path = "/author/:id">
          <ViewAuthor />
        </Route>
        
        <Route exact path = "/">
          <AuthorList />
        </Route>
      </Switch>
      
      
      

    </div>
  );
}

export default App;


