import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from "./Header"
import Login from "./login/LogIn";
import Home from "./Home";
import Profil from "../client/profil/profil"

import './App.css';

class App extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
        userId: null
    };

    this.updateLoggedIn = this.updateLoggedIn.bind(this);
  } 

  updateLoggedIn(userId) {
    this.setState({userId: userId})
}

render(){
    return(
        <BrowserRouter>
            <div>
            <Header userId={this.state.userId}  updateLoggedIn={this.updateLoggedIn}/>
                <Switch>
                <Route exact path="/"
                               render={props => <Home {...props} userId={this.state.userId}/>}/>
                      <Route exact path="/login"
                               render={props => <Login {...props}
                                                       userId={this.state.userId}
                                                       updateLoggedIn={this.updateLoggedIn}/>}/>
                       <Route exact path="/profil"
                               render={props => <Profil {...props} userId={this.state.userId}/>}/>
                </Switch>
            </div>
        </BrowserRouter>


    );
}
}


export default App;
