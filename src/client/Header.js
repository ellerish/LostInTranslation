import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import  logo from '../img/Logo-Hello.png';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

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
                <div className="btn-LogOut" onClick={this.doLogout}>Log out</div>
            </div>
        );
    }

    renderNotLoggedIn() {
        return (
            <div className="login-box">
                <Link to="/logIn">
                <button className="btn-LogIn" onClick={this.logIn}>Log in</button>
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
            <Container>
                 <Row>
                 <Col>
                <div className="header-text">
                    <Link to="/">
                    <h1>Lost in Translation</h1>
                    </Link>
                </div>
                </Col>
                     </Row>
                <Row>
                 <Col>
                {content}
                </Col>
                </Row>                
             
            </Container>
        );
    }

}


export default withRouter(Header);