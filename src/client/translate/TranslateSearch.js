import React, { useState } from 'react'
import  aSign from '../../LostInTranslation_Resources/signs/a.png'

function TranslateSearch() {

  const [letter, setLetter] = useState('')
  //const [sign, setSign] = useState(null)
 // const arr = []; make object ?push to array?

  console.log("i'm rendering!");


  const onLetterChanged = event => {
    // Update the letter
    setLetter(event.target.value)
  }

  const onSearchClicked = () => {
    
  };

  return (
    <div className="container">

        <section className="search-sign">
          <input type="text"
            placeholder="Enter an text"
            value={letter} onChange={onLetterChanged} />
          <button onClick={onSearchClicked}>Search</button>
        </section>

        <section>
          {
            // Spinner/Loader
          }
        </section>

        <img src={ aSign } alt=""></img>

    </div>
  )
}

export default TranslateSearch