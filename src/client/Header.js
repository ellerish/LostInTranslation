import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import  logo from '../img/Logo-Hello.png';
import './App.css';

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.doLogout = this.doLogout.bind(this);
    }

    async doLogout(){

        this.props.updateLoggedIn(null);
        this.props.history.push('/');
    }

    renderLoggedIn(userId){
        return(
            <div className="profile-header">
                <Link to="/profil">
                <h3>{userId}</h3></Link>
                <div className="btn" onClick={this.doLogout}>Log out</div>
            </div>
        );
    }

    renderNotLoggedIn() {
        return (
            <div className="login-box">
                <Link to="/logIn">
                <h3 className="btn-LogIn">Log in</h3>
                </Link>
                <img src={logo} alt="Logo" className="logo-img"/>
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
            <div className= "cotainer-header">
                   {content}
                <div className="header-text">
                    <h1>Lost in Translation</h1>
                </div>
                
             
            </div>
        );
    }

}


export default withRouter(Header);