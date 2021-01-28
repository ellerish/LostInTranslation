import React from "react";
import Translate from "../client/translate/Translate"
import { Container, Row } from 'react-bootstrap';


class Home extends React.Component {
    render(){
    
         const userId = this.props.userId;
         const loggedIn = (userId !== null && userId !== undefined);

        return(
           <Container>
            
                   {loggedIn ? (
                    <Row>
                       <div className="">
                     <h2>Let The Translation beggin</h2>

                           <h3>
                               What do you want to translate?
                               
                           </h3>

                        <Translate></Translate>
                       </div>
                       </Row>

                    

                   ) : (
                        <Row>
                       <div className="notLoggedInWelcome">
                           <p>You need to log in</p>
                       </div>
                       </Row>
                   )}
                  


           </Container>

        );

    }

}
export default Home;