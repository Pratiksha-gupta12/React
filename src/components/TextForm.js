/*
React hook-- Hooks helps in using features of class without making class
initially we set the state by using this.state in class but in function we set the state using react hooks
*/ 

//concept of array destructuring is usesd
import React,{useState} from "react"


export default function TextForm(props) {

    const handleUpClick =()=>{
        console.log("Uppercase was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText);

    }
    const handleLowClick =()=>{
        console.log("Uppercase was clicked" + text);
        let newText= text.toLowerCase();
        setText(newText);

    }
    const handleClearClick =()=>{
        console.log("Uppercase was clicked" + text);
        let newText= '';
        setText(newText);

    }

    const handleOnChange =(event)=>{
        
        setText(event.target.value);

        
    }
    const [text,setText] = useState(' ');

    // text="new text"; // wrong way to set the state
    // setText('new text');

  return (
    <>
    <header>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value ={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>

    </div>
    <div className="box">
    <div className="container my-3">
        <h2><u>Your Text Summary</u></h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.08 * text.split(" ").length} Minutes read</p>
        <h2><u>Preview</u></h2>
        <p>{text}</p>

    </div>
    </div>
    </header>
    </>
  );
}
