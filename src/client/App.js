import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from "./Header"
import Login from "./login/LogIn";
import Home from "./Home";
import Profil from "./profil/Profil"
import NotFound from './notFound/NotFound'

import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userId: null
        };
        this.updateLoggedIn = this.updateLoggedIn.bind(this);
    }

    updateLoggedIn(userId) {
        this.setState({ userId: userId })
    }

    componentDidMount(){
        this.checkIfUserAlreadyLoggedIn();
    }
    
    checkIfUserAlreadyLoggedIn = async () => {
        const url = 'http://localhost:8080/users';

        let response;

        try {
            response = await fetch(url, {
                method: "get"
            });
        } catch (err) {
            this.setState({errorMsg: "Failed to connect to server: " + err});
            return;
        }

        if (response.status === 401) {
            this.updateLoggedIn(null);
            return;
        }

        if (response.status !== 200) {
        } else {
            const payload = await response.json();
            this.updateLoggedIn(payload.userId);
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header userId={this.state.userId} updateLoggedIn={this.updateLoggedIn} />
                    <Switch>
                        <Route exact path="/"
                            render={props => <Home {...props} userId={this.state.userId} />} />
                        <Route exact path="/login"
                            render={props => <Login {...props} userId={this.state.userId} updateLoggedIn={this.updateLoggedIn} />} />
                        <Route exact path="/profil"
                            render={props => <Profil {...props} userId={this.state.userId} />} />
                        <Route path="*" component={ NotFound } />

                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}


export default App;
