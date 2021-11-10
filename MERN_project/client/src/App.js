import { Link, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './components';
import Chat from './components/chat';
import './App.css';
import socketClient from 'socket.io-client';

const SERVER = "http://localhost:3000/chat";

function App() {
  // var socket = socketClient(SERVER);

  return (
    <div className="App">
      <h1>Colloquium</h1>
      
      {/* <code>src/App.js</code> */}

      <Switch>

        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path = "/chat">
          <Chat />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
