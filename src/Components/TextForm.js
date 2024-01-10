import React, { useState } from 'react';
//import PropTypes from 'prop-types'

export default function TextForm(props) {
  const [text, setText] = useState('');
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Text is converted to Uppercase', 'success');
    //console.log('Uppercase was clicked')
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Text is converted to Lowercase', 'success');
    //console.log('Lowercase was clicked');
  };

  const handleOnChange = (event) => {
    //console.log('Uppercase was clicked');
    setText(event.target.value);
  };

  const handleClearClick = (event) => {
    //console.log('Uppercase was clicked');
    let newText = '';
    setText(newText);
    window.speechSynthesis.cancel();
    props.showAlert('All clear!', 'success');
  };
  const handleTrimClick = (event) => {
    //console.log('Uppercase was clicked');
    let newText = text.replace(/\s+/g, ' ').replace(/\n+/g, '\n').trim();
    setText(newText);
    props.showAlert('Whole text is converted into a single paragraph', 'success');
    window.speechSynthesis.cancel();
  };
  const handleFirUpClick = (event) => {
    //console.log('Uppercase was clicked');
    props.showAlert('1st letter of each word is now uppercase', 'success');
    let newText = text
      .split(/\s/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    setText(newText);
  };
  const readOnClick = (event) => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    props.showAlert('Reading...', 'success');
    window.speechSynthesis.speak(msg);
    //setSpeaking(true)
    //console.log(speaking)
  };

  const stopOnClick = (event) => {
    window.speechSynthesis.cancel();
     props.showAlert('Stopped Reading', 'success');
    //setSpeaking(false)
  };

  const handleCopyClick = () => {
    let msg = document.getElementById('myBox');
    msg.select();
    if(window.isSecureContext){
      navigator.clipboard.writeText(msg.value);
      props.showAlert('Copied to clipboard','success')
    }
    else{
      props.showAlert('This Action is not safe','danger')
    }
  };

  const getContentBasedOnMode=(mode)=>{
    if(mode==='dark' || mode==='purple' || mode==='pink'){
      return 'light'
    }
    else{
      return 'dark'
    }
  }

 
 const textBoxMode = (mode) => {
   const myBox = document.getElementById('myBox');

   if (myBox) {
     if (mode === 'dark') {
       myBox.style.backgroundColor = 'black';
       myBox.style.color = 'white';
     } else if (mode === 'purple') {
       myBox.style.backgroundColor = '#120E23';
       myBox.style.color = 'white';
     } else if (mode === 'pink') {
       myBox.style.backgroundColor = '#AD1457';
       myBox.style.color = 'white';
     } else {
       myBox.style.backgroundColor = 'white';
       myBox.style.color = 'black';
     }
   } else {
    // console.warn("Faild to load myBox");
   }
 }; 

  return (
    <>
      <div className="container">
        <h1 className="my-2" style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            placeholder="Enter the text or paste it here..."
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={textBoxMode(props.mode)}
          ></textarea>
        </div>
        <button className={`btn btn${props.mode==='light'?'':'-outline'}-${getContentBasedOnMode(props.mode)} mx-3 my-4`} onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className={`btn btn${props.mode==='light'?'':'-outline'}-${getContentBasedOnMode(props.mode)} mx-3 my-4`} onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button
          className={`btn btn${props.mode==='light'?'':'-outline'}-${getContentBasedOnMode(props.mode)} mx-3 my-4`}
          onClick={handleFirUpClick}
        >
          1st Letter to Uppercase
        </button>
        <button className={`btn btn${props.mode==='light'?'':'-outline'}-${getContentBasedOnMode(props.mode)} mx-3 my-4`} onClick={readOnClick}>
          Read aloud
        </button>
        <button className={`btn btn${props.mode==='light'?'':'-outline'}-${getContentBasedOnMode(props.mode)} mx-3 my-4`} onClick={stopOnClick}>
          Stop Reading
        </button>
        <button className={`btn btn${props.mode==='light'?'':'-outline'}-${getContentBasedOnMode(props.mode)} mx-3 my-4`} onClick={handleTrimClick}>
          Convert it to a single paragraph
        </button>
        <button className={`btn btn${props.mode==='light'?'':'-outline'}-${getContentBasedOnMode(props.mode)} mx-3 my-4`} onClick={handleCopyClick}>
          CopyText
        </button>
        <button className={`btn btn${props.mode==='light'?'':'-outline'}-${props.mode==='pink'?'warning':'danger'} mx-3 my-4`} onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-4" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Your Text Summary</h2>
        <p>
          This text has {text.split(' ').filter((word) => word !== '').length}{' '}
          words, {text.split(' ').join('').length} characters,{' '}
           {text.split(' ').length-1} spaces
        </p>
        <p>
          Average time required to read this is{' '}
          {
            text.split(' ').filter((word) => word !== '').length * 0.0044
          }{' '}
          minutes
        </p>
        <h2>Preview</h2>
        <p>{text.length===0?'Enter something in the box to see the preview.':text}</p>
      </div>
    </>
  );
}

TextForm.defaultProps = {
  heading: 'Give Heading',
};
