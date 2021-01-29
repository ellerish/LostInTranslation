import React from 'react'
import TranslateSigns from '../translate/TranslateSigns';


export class ProfilTest extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        translations: []
      }
    }
    
    async deleteSaved(id) {
        const url = `http://localhost:8080/translations/${id}`
          
        try {
          fetch(url, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json"
            }
          });
        } catch (err) {
          this.setState({ errorMsg: "Failed to connect to server: " + err });
          return;
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/translations')
          .then(response => response.json())
          .then(translations => this.setState({ translations }));
      }
    render() {
    let { translations } = this.state;
      return (
        <div>
                <ul>
                    {translations.map(t =>
                     <li key={t.id}>
                       <p>{t.letters}</p>
                       <button onClick={this.deleteSaved(t.id)}>Slett</button>
                     <TranslateSigns letters={t.letters}></TranslateSigns>
                      </li>
                        )}
             </ul>

      



        </div>
      )
    }
  }

  export default ProfilTest;
