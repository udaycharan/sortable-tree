import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";


const store = createStore(rootReducer, applyMiddleware(thunk))

console.log(store.getState())

export default store;