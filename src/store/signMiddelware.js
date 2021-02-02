import { ACTION_SIGNS_FETCHING, signsSetAction  } from "./signAction";
import { fetchSign } from "./fetchSign";

export const signMiddelware = ({ getState, dispatch }) => next => action => {

    next( action )

    if ( action.type === ACTION_SIGNS_FETCHING ) {

        fetchSign().then(translations => {
            dispatch( signsSetAction( translations ) )
            console.log( translations)
        }).catch(error => {
          
        })

    }

}