import React, { useState } from 'react'

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
            <input
                placeholder="Type to translate"
                onChange={onChangeTranslation}
            ></input>
            <button onClick={OnHandleUserSearch}>
                Go
        </button>
        </div>

    );
};
export default TranslateSearch
