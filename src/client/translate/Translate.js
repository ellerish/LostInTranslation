import React from 'react';
import TranslateSearch from './TranslateSearch';
import TranslateSigns from './TranslateSigns';
import './Translate.css';


class Translate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInputs: ''
        };
    }
    handleUserSearch = (letters) => {
        this.setState({ userInputs: letters});
    }
    saveSigns = async () => {
        const { userInputs  } = this.state;
    
        const url = "http://localhost:8080/translation";
  
        const payload = { letters: userInputs};
    
        //let response;
    
        try {
           await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
          });
        } catch (err) {
          this.setState({ errorMsg: "Failed to connect to server: " + err });
          return;
        }
    
        this.setState({ errorMsg: null });
      };
   
    render() {
        let {userInputs} = this.state;
        return (
            <div>
            <TranslateSearch handleUserSearch={this.handleUserSearch}
            >  
            </TranslateSearch>
            <TranslateSigns letters={userInputs}>

            </TranslateSigns>
            <button onClick={this.saveSigns} className="btn-go">SAVE</button>


            </div>

        )


    }




}

export default Translate;