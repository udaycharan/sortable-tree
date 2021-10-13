import React from "react";
import {FaTimes} from "react-icons/fa";
import { connect } from "react-redux";
import { buttonclickCloseModal, onChangeInput } from "../redux/actions";
import store from "../redux/store";





function ModalItem({data}){




    return(
        <div style={{position: "fixed", width: "100%", height: "100vh", top: "0", left: "0", background: "rgb(0,0,0, 0.5)", transition: "all 0.5s" }}>
       <div className="modal">

            <div className="modal-header">Edit field<span style={{margin: "1rem"}}>
                    <label htmlFor="Header">Header<input type="radio" style={{margin: "9px"}}/></label>
                    <label htmlFor="Footer">Footer<input type="radio"  style={{margin: "9px"}}/></label>
                    <FaTimes style={{cursor: "pointer", margin: "5px"}} onClick={()=>store.dispatch(buttonclickCloseModal())}/>
                    </span>
                </div>

            <div className="modal-body">
                    <input type="text" style={{margin: "1rem"}} value={data.inputText || ""} onChange={(event)=> store.dispatch(onChangeInput(event.target.value))}/>
                    {console.log(data.inputText)}
                    <select>
                        <option value="text">text</option>
                        <option value="number">number</option>
                        <option value="radio">radio</option>
                        <option value="checkbox">checkbox</option>
                        <option value="date">date</option>
                    </select>
            </div>

            <div className="modal-footer">
                <button style={{padding: ".4rem", width: "70px", border: "none", background: "#0275d8", color: "white", borderRadius: "5px" }}
                onClick={()=>store.dispatch()}>Add</button>
            </div>

       </div>
       </div>
    );

}

const mapStateToProps=(state)=>{

    return{
        data: state.treeData,
        InputText: state.inputText
    }
}

export default connect(mapStateToProps)(ModalItem);