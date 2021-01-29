import React from 'react';
import TranslateSearch from './TranslateSearch';
import TranslateSigns from './TranslateSigns';
import './Translate.css';
import { Row, Col } from 'react-bootstrap';



class Translate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInputs: '', 
            errorMsg: null
        };

    }
    handleUserSearch = (letters) => {
        this.setState({ userInputs: letters});
        
    }

    saveSigns = async () => {
       
        const { userInputs  } = this.state;
    
        const url = "http://localhost:8080/translations";
  
        const payload = { letters: userInputs};
    
  
        try {
           await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
          });
          console.log(userInputs)
          
        } catch (err) {
          this.setState({ errorMsg: "Failed to connect to server: " + err });
          return;
        }
        this.setState({ errorMsg: null});
       
      };
   
    render() {
        let {userInputs} = this.state;
        return (
            <Row>
              <Col></Col>
              <Col>
              <h1 className="translation-header">Let the translations begin</h1>
            <TranslateSearch handleUserSearch={this.handleUserSearch}
            >  
            </TranslateSearch>
            
            <TranslateSigns letters={userInputs}>
            </TranslateSigns>
            <button onClick={this.saveSigns} className="btn-go" disabled={this.state.userInputs.length===0}>SAVE</button>
            </Col>
            <Col>
           
            </Col>
            </Row>

        )


    }




}

export default Translate;