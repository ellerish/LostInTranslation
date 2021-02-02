import { applyMiddleware, createStore } from "redux";
import { signReducer } from "./signReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { signMiddelware } from "./signMiddelware";

export const store = createStore(signReducer, composeWithDevTools(
    applyMiddleware(
        signMiddelware
    )
))