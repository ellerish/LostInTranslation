import React, { useState } from 'react'
import './Translate.css';


const TranslateSearch = (props) => {

    const { handleUserSearch } = props;
    const [userInputs, setTranslation] = useState('');

    const onChangeTranslation = (event) => {
        setTranslation(event.target.value);
    };

    const OnHandleUserSearch = () => {
        handleUserSearch(userInputs.toLowerCase());
    };

    return (

        <div>
            <input className="input-box"
                placeholder="Type to translate"
                maxlength="40"
                onChange={onChangeTranslation}
            ></input>
            <button onClick={OnHandleUserSearch} className="btn-go">
                Go
        </button>
        </div>

    );
};
export default TranslateSearch
