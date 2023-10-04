import React, {useState} from  'react'

export default function TextForm(props){
    
    
    const handleUpClick=()=>{
        console.log("UpperCase was clicked" + text);
        let newText=text.toUpperCase();
        setText("You have clicked to handle upclick",{text});
        props.showAlert("Convert to UpperCase!" , "success");
    }




    const handledownClick=()=>{
      console.log("Lowercase was clicked" + text);
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Convert to Lowercase","success");
  }
  

  
    const handleOnChange= (event)=>{
      console.log("On Change");
      setText(event.target.value);
  }}