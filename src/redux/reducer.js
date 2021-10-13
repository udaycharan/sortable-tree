import { FETCH_USER_REQUEST, FETCH_SUCCESS, FETCH_FAILURE, ON_CLICK_SHOW_MODAL, ON_CLICK_CLOSE_MODAL, ON_CHANGE_INPUT} from "./actionsTypes";
// import { addNode,deleteNode, editNode } from "./actions";

const initialState={
    isLoading: false,
    isBtnClicked: false,
    inputText: "",
    selectInputType: "",
    treeData: [],
    error: ""
}


const reducer = (state=initialState, action)=>{

    switch(action.type){

        case FETCH_USER_REQUEST: 
        return {

            ...state,
            isLoading: true,
        }

        case FETCH_SUCCESS: 
        return{

            isLoading: false,
            treeData: action.payload,
            error: ""
        }

        case FETCH_FAILURE:

        return{

            isLoading: false,
            treeData: [],
            error: action.payload
        }

        case ON_CHANGE_INPUT:

        return{
            ...state,
            inputText: action.payload

         
        }
 

        case ON_CLICK_SHOW_MODAL:

        return{

            ...state,
            isBtnClicked : action.payload
            

        }

        case ON_CLICK_CLOSE_MODAL:

        return {

            ...state,
            isBtnClicked: action.payload
        }

       

        default: return state;

    }

}



export default reducer;