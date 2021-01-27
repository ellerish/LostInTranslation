import React from "react";
import Translate from "../client/translate/Translate"

class Home extends React.Component {
    render(){
    
         const userId = this.props.userId;
         const loggedIn = (userId !== null && userId !== undefined);

        return(
           <div>
               <div>
                   
               </div>
                   {loggedIn ? (

                       <div className="">
                     <h2>Let The Translation beggin</h2>

                           <h3>
                               What do you want to translate?
                               
                           </h3>

                        <Translate></Translate>
                       </div>

                   ) : (

                       <div className="notLoggedInWelcome">
                           <p></p>
                       </div>
                   )}
              


           </div>

        );

    }

}
export default Home;