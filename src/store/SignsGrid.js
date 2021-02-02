import { useSelector } from "react-redux";

function SignsGrid() {

    const { translations  } = useSelector( state => state.signReducer)
    
    return (
        <ul>
        {translations.map(translation =>
          <li key={translation.id}>
            <p>{translation.letters}</p>

          </li>
        )}
      </ul>
        

    )
}

export default SignsGrid
