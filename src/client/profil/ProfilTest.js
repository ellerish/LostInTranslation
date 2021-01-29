import React from 'react'

export class ProfilTest extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        translations: []
      }
    }
    componentDidMount() {
        fetch('http://localhost:8080/translations')
          .then(response => response.json())
          .then(translations => this.setState({ translations }));
      }
    render() {
    const { translations } = this.state;
      return (
        <div>
                <ul>
        {translations.map(t =>
          <li key={t.id}>
              <p>{t.letters}</p>
          </li>
        )}
      </ul>


        </div>
      )
    }
  }

  export default ProfilTest