import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from "./Header"
import SignUp from "./login/SignUp";

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
        <Switch>
            <Route exact path="/signup"
                   render={props => <SignUp {...props}
                                            userId={this.state.userId}
                                            updateLoggedIn={this.updateLoggedIn}/>}/>
        </Switch>
    </div>
</BrowserRouter>
  );
}

export default App;
