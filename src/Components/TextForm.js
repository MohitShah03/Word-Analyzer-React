import React,{useState} from 'react';
//import PropTypes from 'prop-types'


export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        let newText=text.toUpperCase();
        setText(newText)
        //console.log('Uppercase was clicked')
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        //console.log('Lowercase was clicked');
    };

    const handleOnChange = (event) => {
        //console.log('Uppercase was clicked');
        setText(event.target.value)
    };

    const handleClearClick = (event) => {
      //console.log('Uppercase was clicked');
      let newText ="";
      setText(newText);
      window.speechSynthesis.cancel();
    };
    const handleFirUpClick = (event) => {
      //console.log('Uppercase was clicked');
      let newText = text.split(/\s/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      setText(newText);
    };
    const readOnClick = (event) => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    };

    const stopOnClick = (event) => {
        window.speechSynthesis.cancel();
    };


    

    return (
      <>
        <div className="container">
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              placeholder='Enter the text or paste it here...'
              onChange={handleOnChange}
              id="myBox"
              rows="8"
            ></textarea>
          </div>
          <button className="btn btn-primary mx-3 my-4" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-3 my-4" onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary mx-3 my-4" onClick={handleClearClick}>
            Clear Text
          </button>
          <button className="btn btn-primary mx-3 my-4" onClick={handleFirUpClick}>
            1st Letter to Uppercase
          </button>
          <button className="btn btn-primary mx-3 my-4" onClick={readOnClick}>
            Read aloud
          </button>
          <button className="btn btn-primary mx-3 my-4" onClick={stopOnClick}>
            Stop Reading
          </button>
        </div>
        <div className="container my-4">
            <h2>Your Text Summary</h2>
            <p>This text has {text.split(" ").filter(word => word !== "").length} words & {text.length} characters</p>
            <p>Average time required to read this is {text.split(" ").filter(word => word !== "").length * 0.008} minutes</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
      </>
    );
}

TextForm.defaultProps={
    heading:'Give Heading'
}
