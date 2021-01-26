import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import logo from '../LostInTranslation_Resources/Logo-Hello.png';
import './App.css';


class Header extends React.Component {

    constructor(props) {
        super(props);

        this.doLogout = this.doLogout.bind(this);
    }

    async doLogout(){

        const url = "/api/logout";
        let response;

        try {
            response = await fetch(url, {method: "post"});
        } catch (err) {
            alert("Failed to connect to server: "+ err);
            return;
        }

        if(response.status !== 204){
            alert("Error when connecting to server: status code "+ response.status);
            return;
        }

        this.props.updateLoggedIn(null);
        this.props.history.push('/');
    }


    renderLoggedIn(userId){
        return(
            <div>
                <h3>Welcome {userId}</h3>
                <div className="btn" onClick={this.doLogout}>Log out</div>
            </div>
        );
    }

    renderNotLoggedIn() {
        return (
            <div className="cotainer-header">
                <img src={logo} alt="Logo" className="logo-img"/>
                <p>Lost in translation</p>
                <p>Get Stated</p>
                <Link to="/login">Log In</Link>
            </div>
        );
    }
    render(){

        const userId = this.props.userId;

        let content;
        if(userId === null || userId === undefined){
            content = this.renderNotLoggedIn();
        } else {
            content = this.renderLoggedIn(userId);
        }

        return(
            <div className={"header"}>
                <h1 className="header-text">Lost in Translation</h1>
                {content}
            </div>
        );
    }

}


export default withRouter(Header);