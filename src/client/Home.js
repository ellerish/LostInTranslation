import React from "react";
import Translate from "../client/translate/Translate"
import { Col, Row } from 'react-bootstrap';


class Home extends React.Component {
    render(){
    
         const userId = this.props.userId;
         const loggedIn = (userId !== null && userId !== undefined);

        return(
           <Row>
                   {loggedIn ? (
                    <Col>
                        <Translate></Translate>        
                       </Col>       

                   ) : (
                        <Col>
                           <p className="notLoggedInWelcome">You need to log in</p>
                       
                       </Col>
                   )}
                  


           </Row>

        );

    }

}
export default Home;