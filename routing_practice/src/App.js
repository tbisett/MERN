import './App.css';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import Home from './components/Home';
import Number from './components/Number';
import Word from './components/Word';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <header>
        

        <Switch>
          <Route exact path="/home">
            <Home />
            
          </Route>

          <Route exact path="/:var1">
            <Number />
            
          </Route>

          <Route exact path="/:var1/:var3/:var4">
            <Hello />
          </Route>
        </Switch>

      </header>
    </div>
  );
}

export default App;



