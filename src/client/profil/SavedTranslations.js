import { useContext, useEffect } from 'react'
import { AppContext} from '../../app/AppProvider'

function SavedTranslations() {

    const [ state, actions ] = useContext(AppContext)

    useEffect(() =>{
        actions.fetchTranslations();
    }, [])

    return(
        <main>
            <ul>
                {
                    state.translations.map(translation => (
                        <li>
                            <p>{translation.letters}</p>
                        </li>
                    ))
                }     
            </ul>
        </main>
    )
}
export default SavedTranslations