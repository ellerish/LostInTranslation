import React from 'react';
import TranslateSearch from './TranslateSearch';
import TranslateSigns from './TranslateSigns';

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
   
    render() {
        let {userInputs} = this.state;
        return (
            <div>
            <TranslateSearch handleUserSearch={this.handleUserSearch}
            >  
            </TranslateSearch>
            <TranslateSigns letters={userInputs}>

            </TranslateSigns>


            </div>

        )


    }




}

export default Translate;