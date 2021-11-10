import './App.css';
import Login from './components/login';
import React from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import LocalStorage from './hooks/localStorage';
import Dashboard from './components/Dashboard';
import { FriendProvider } from './contexts/FriendProvider';
import { ThreadsProvider } from './contexts/ThreadProvider'

function App() {
  const [id, setId] = LocalStorage('id');
  const dashboard = (
    <FriendProvider>
      <ThreadsProvider id={id}> 
        <Dashboard id={id} />
      </ThreadsProvider>
    </FriendProvider>
  )

  return (
    // <div className="App">
    <>
      <Switch>
        <Route exact path="/">
          {id ? dashboard : <Login onIdSubmission={setId}/>}
        </Route>
          


      </Switch>
    </>
    // </div>
  );
}

export default App;

