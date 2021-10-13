import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
// import { onChangeEvent } from "../redux/actions";
import { fetchData } from "../redux/actions";
import SortableTree from "react-sortable-tree";
import 'react-sortable-tree/style.css';
import {FaPlus, FaTrashAlt, FaPen} from "react-icons/fa";
import Modal from "./Modal";
import store from "../redux/store";
import { buttonclickShowModal } from "../redux/actions";




function Tree({ fetchData, data}){


    useEffect(()=>{

        fetchData();


    }, [fetchData])



    return data.isLoading ? (<h1>Loading...</h1>) : data.error ? (<h1>{data.error}</h1>) :

     (

        <>
                    <SortableTree 
                    style={{height: "400px"}}
                    treeData={data.treeData} 
                
                    
                    onChange={(treeData) =>(
                        this.setState({ treeData })
                    )}
                    generateNodeProps={ ({node, path})=>({
                        buttons: [
                    
                        <FaPlus style={{marginRight: "8px", cursor: "pointer"}} onClick={()=>store.dispatch(buttonclickShowModal())}/>,
                        <FaPen style={{margin: "10px", cursor: "pointer"}}onClick={()=>store.dispatch(buttonclickShowModal())}/>,
                    <FaTrashAlt style={{cursor: "pointer", margin: "5px"}}/>
                    
                        ],

                        

                
                    
                })}

                />

                {data.isBtnClicked && <Modal/>}

        </>

    

              
    );
}



const mapStateToProps = (state) =>{

    return{

        data: state.treeData,
        isBtnCliked: state.isBtnClicked
    }
}

const mapDispatchToProps = (dispatch)=>{

    return{

        fetchData: ()=> dispatch(fetchData())
    }
}


export default connect (mapStateToProps, mapDispatchToProps)(Tree);