import { combineReducers } from "redux";
import reducer from "./reducer";

const rootReducer = combineReducers({

    treeData: reducer
})

export default rootReducer;