import { Link, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import AddPirate from './components/AddPirate';
import ViewOne from './components/ViewOne';
import ViewPirates from './components/ViewPirates';

function App() {
  return (
    <div className="App">

      <Switch>

        <Route exact path= "/pirates">
          <h1>Pirate Crew</h1> <Link to = "/pirate/new"><button>add pirate</button></Link>
          <ViewPirates />
        </Route>

        <Route exact path= "/pirate/new">
          <AddPirate />
        </Route>

        <Route exact path= "/pirate/:id">
          <ViewOne />
        </Route>


      </Switch>


    </div>
  );
}

export default App;
