//Global Store file.

import { createContext, useReducer} from 'react'

export const AppContext = createContext();

export const ACTION_SET_TRANSLATIONS = 'translations:SET_TRANSLATIONS'
export const ACTION_TRANSLATIONS_LOADING = 'translations: DELETE_TRANSLATIONS'

function appReducer(state, action) {
    switch( action.type ) {
        case ACTION_SET_TRANSLATIONS:
            return{
                ...state, 
                translations: [action.payload]
            }
         case ACTION_TRANSLATIONS_LOADING:
             return{
                ...state, 
                loading: action.payload
             }
            default:
                return state
    }
}

const initialState = {
    translations: [],
    loading: false
}

export function AppProvider( props ) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  const actions = {
    fetchTranslations () {
        const translations = fetch('http://localhost:8080/translations')
        .then(response => response.json())      
            
            dispatch({ type: ACTION_SET_TRANSLATIONS, payload: translations})
        }
    }

    return(
    <AppContext.Provider value= {[state, actions]}>
                { props.children }    
        </AppContext.Provider>
    )
}