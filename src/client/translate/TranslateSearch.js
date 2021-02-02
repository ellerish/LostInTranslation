import React, { useState } from 'react'
import './Translate.css';


const TranslateSearch = (props) => {

    const { handleUserSearch } = props;
    const [userInputs, setUserInputs] = useState('');

    const onChangeTranslation = (event) => {
        setUserInputs(event.target.value);
    };

    const OnHandleUserSearch = () => {
        handleUserSearch(userInputs.toLowerCase());
       
    };

    return (

        <div className="translate-serach">
            <input className="input-box"
                placeholder="Type to translate"
                onChange={onChangeTranslation}
            ></input>
            <button onClick={OnHandleUserSearch} className="btn-go">
                Go
            </button>
         </div>

    );
};
export default TranslateSearch
