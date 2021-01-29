import React, {useEffect, useState} from 'react'
import TranslateSigns from '../translate/TranslateSigns';

function Test () {
    const [translations, setTranslations] = useState([]);

   const OnHandleDelete = (id) => {
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
        
    };
    useEffect(() => {
        fetch('http://localhost:8080/translations')
        .then(response => response.json())
        .then(translations => setTranslations({ translations }));

      });

   //return <div>{translatedLetters}</div>;

     const showTanslations = (translations.length >  1)
     
      
     return (
        <div>
            { showTanslations ? (
                <div>
                <ul>
                    {translations.map(t =>
                     <li key={t.id}>
                       <p>{t.letters}</p>
                     <TranslateSigns letters={t.letters}></TranslateSigns>
                     <button onClick={OnHandleDelete(t.id)}>Slett</button>

                      </li>
                        )}          
                    </ul>
                    </div>
            ) : (
                         <div>
                             <p> You have no saved translations</p>
                    </div>

            )}
        </div>
      )
    }

  export default Test;
