import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import logo from '../LostInTranslation_Resources/Logo-Hello.png';
import './App.css';


class Header extends React.Component {


    renderLoggedIn(userId){
        return(
            <div>
                <h3>Welcome {userId}</h3>
            </div>
        );
    }

    renderNotLoggedIn() {
        return (
            <div className="cotainer-header">
                <img src={logo} alt="Logo" className="logo-img"/>
                <Link to="/logIn">Log In</Link>
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