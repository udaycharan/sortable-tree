import axios from "axios";
import { FETCH_USER_REQUEST, FETCH_SUCCESS, FETCH_FAILURE, ON_CLICK_SHOW_MODAL, ON_CHANGE_INPUT, SELECT_INPUT_TYPE} from "./actionsTypes";


export const fetchUserRequest = ()=>{

    return{
        type: FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = (data)=>{

    return{

        type: FETCH_SUCCESS,
        payload: data
    }
}

export const fetchUserFailure = (error)=>{

    return{

        type: FETCH_FAILURE,
        payload: error
    }
}


export const buttonclickShowModal=()=>{

    return{

        type : ON_CLICK_SHOW_MODAL,
        payload: true
    }

}


export const buttonclickCloseModal=()=>{

    return{

        type : ON_CLICK_SHOW_MODAL,
        payload: false
    }

}

export const onChangeInput = (value)=>{

 return{

    type: ON_CHANGE_INPUT,
    payload: value

 }

}

export const selectInputType=(selectedValue)=>{

    return{
        type: SELECT_INPUT_TYPE,
        payload: selectedValue
    }
 }



// export const deleteNode=()=>{

//     return {
//         type: DEL_NODE
//     }
// }

// export const editNode=()=>{

//     return{

//         type: EDIT_NODE
//     }
// }

// export const downloadFile=()=>{

//     return{

//         type: DOWNLOAD_FILE,
//         payload: data
//     }
// }

export  const fetchData = ()=>{

    return (dispatch)=>{

        dispatch(fetchUserRequest);

        axios.get("http://localhost:3006/data")
        .then((response=> {
            const data = response.data
            console.log(data);
            dispatch(fetchUserSuccess(data));
        })).catch(err =>{

            const error = err.message;
            dispatch(fetchUserFailure(error));
        })
        
    }
}

// export const addNode=()=>{

//         return (dispatch)=>{

//             return axios(()=>{

//                 method: "POST",
//                 url : "http://localhost:3006/data",
//                 data: {
                
//                     title: "new node",
//                     type: ""

//                 }

//             })
                    
//}