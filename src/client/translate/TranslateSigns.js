import React, { useState, useEffect } from 'react';

const TranslateSigns = (props) => {
  const { letters } = props;
  const [ lettersArray, setLettersArray] = useState([]);


  useEffect(() => {
    if (letters) {
      setLettersArray([...letters]);
    }
  }, [letters]);

  const translatedLetters = lettersArray.map((char, index) =>
     (
      <img key={index}  src={`../../LostInTrans/signs/${char}.png`} alt=""></img>    )
  );
  return <div>{translatedLetters}</div>;
};
export default TranslateSigns;