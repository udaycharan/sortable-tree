import React from "react";
import axios from "axios";




function Button (){


    const getFile = async ()=>{
  
      await axios.get(" http://localhost:3006/data")
      .then(response =>{
                    const blob = response.data;
                    let url = window.URL.createObjectURL(new Blob(blob, {type: "application/json"}));
					let a = document.createElement('a');
					a.href = url;
					a.download = 'data';
					a.click();
      })
      
  
    }
  


    return(
        <>
        <button style={{padding: ".8rem", borderRadius: "5px", border: "none", cursor: "pointer", background: "#22577A", color: "white",  boxShadow: "3px 5px 8px rgba(133, 130, 130, 0.767)"}} onClick={getFile}>DOWNLOAD JSON</button>
        </>
    );
}

export default Button;