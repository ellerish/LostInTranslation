import { useContext, useEffect } from 'react'
import { AppContext} from '../../app/AppProvider.js'


function Translations() {

    const [ state, actions ] = useContext(AppContext)
   // console.log(state.translations.le)

    useEffect(() => {
        actions.fetchTranslations();
      }, []);

    return(
        <div>
            <h1>My Saved Translations</h1>
            <p>{state.translations.length}</p>
            <ul>
        {state.translations.map(t =>
          <li key={t.id}>
              <p>{t.letters}</p>
          </li>
        )}
      </ul>


             

         



            <p>Hei</p>

        </div>
    )
}
export default Translations