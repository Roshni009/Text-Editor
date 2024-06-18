import React, { useState } from "react";

export default function Form(props) {

    const handlerToChange = (event) => {
         setText(event.target.value);
    }

    const handletoUpperCase = () => {
     let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" Now your text capital ", "success");
    }

    const handletoLowerCase = () => {
        let newText = text.toLowerCase();
           setText(newText);
           props.showAlert(" Now your text small ", "success");
       }

       const handleCopy = () => {
          let text = document.getElementById("text");
          text.select();
          navigator.clipboard.writeText(text.value);
          document.getSelection().removeAllRanges(); //use for to selected text to unselect
          props.showAlert(" Now your text is copy to clipboard ", "success");
       }

       const handleExtraSpace = () => {
          let newText = text.split(/[ ]+/);
          setText(newText.join(" "));
          props.showAlert(" Now your text is removed all extra spaces ", "success");
       }

    const handleToClear = () => {
        let newText = "";
        setText(newText);
        props.showAlert(" clear your text area", "success");
    }
   

    const [text, setText] = useState("");

 return(
    <>
         <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
          <h3 className="mt-5 mb-4">{props.heading}</h3>

            <div className="mb-3">
            <textarea className="form-control" name="text" id="text"  cols="80" rows="8"  value={text} onChange={handlerToChange} style={{backgroundColor:props.mode==='dark'?'#75b79830':'#6c757d3d', color: props.mode==='dark'?'white':'#042743'}}></textarea>
          
            </div>
           
            <button disabled={text.length===0} className="mx-2 my-2 btn btn-primary text-left" onClick={handletoUpperCase} >Convert to uppercase</button>
            
            <button disabled={text.length===0} className="mx-2 my-2  btn btn-primary" onClick={handleToClear} >clear Text</button>

            <button disabled={text.length===0} className="mx-2 my-2  btn btn-primary"  onClick={handletoLowerCase}>convert to lower case</button>
            <button disabled={text.length===0} className="mx-2 my-2  btn btn-primary" onClick={handleCopy}>copy Text</button>
            <button disabled={text.length===0} className="mx-2 my-2 btn btn-primary" onClick={handleExtraSpace}>Remove Extra Space</button>

          
             <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2>Preview</h2>
                <p>{text.split(" ").filter((element) => {return element.length!==0}).length} words and {text.length} character</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => {return element.length!==0}).length} Minutes read.</p>
               
                <h3>Summary</h3>
                 <p>{text.length>0?text:"Nothing to preview "}</p>

             </div>
             </div>

        
         </>
    );
}