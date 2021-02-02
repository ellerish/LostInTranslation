import { ACTION_SIGNS_SET, ACTION_SIGNS_FETCHING} from "./signAction";

const initialState = {
    translations: []
}

export function signReducer(state = initialState, action) {
    switch( action.type ) {

        case ACTION_SIGNS_FETCHING:
            return {
                translations: [{
                    "letters": "elise",
                    "id": 6
                    },
                    {
                    "letters": "elise",
                    "id": 7
                    }]
            }

        case ACTION_SIGNS_SET:
            return  {
                translations: action.payload
            }

        default:
            return state

    }
}