import React from 'react'
import TranslateSigns from '../translate/TranslateSigns';
import './Profil.css';
import { Col } from 'react-bootstrap';


export class ProfilTest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      translations: []
    }
    this.deleteSaved = this.deleteSaved.bind(this);
  }

  deleteSaved(id) {
    const url = `http://localhost:8080/translations/${id}`

    try {
      fetch(url, {
        method: "delete",
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

    const showTanslations = (translations.length > 1)

    return (
      <Col>
        { showTanslations ? (
          <div>
            <ul>
              {translations.map(t =>
                <li key={t.id}>
                  <p>{t.letters}</p>
                  <TranslateSigns letters={t.letters}></TranslateSigns>
                  <button onClick={this.deleteSaved(t.id)} className="btn-delete">Delete</button>

                </li>
              )}
            </ul>
          </div>
        ) : (
            <div>
              <h1 className="no-trans-title"> You have no saved translations</h1>
            </div>

          )}
      </Col>
    )
  }
}

export default ProfilTest;
