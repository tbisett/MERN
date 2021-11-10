import { Link, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import WishList from './components/WishList';
import AddGame from './components/AddGame';
import ViewOne from './components/ViewOne';
import UpdateGame from './components/UpdateGame';

function App() {
  return (
    <div className="App">
      <h1>Games Wishlist</h1>
      <Link to = "/game/add">Add a Game</Link> | <Link to = "/">Home</Link>
      <Switch>
        <Route exact path = "/">
          <WishList />
        </Route>
        
        <Route exact path = "/game/add">
          <AddGame />
        </Route>

        <Route exact path = "/game/:id">
          <ViewOne />
        </Route>

        <Route exact path = "/game/update/:id">
          <UpdateGame />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
          
