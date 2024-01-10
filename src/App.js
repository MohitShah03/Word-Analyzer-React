import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alerts from './Components/Alerts';
import About from './Components/About';
import React,{ useState } from 'react';
// import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';



function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null)

  const showAlert=(message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500);
  }

  

  const toggleMode = ()=>{
    if(mode ==='light' || mode === 'purple'){
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      showAlert('Dark mode is on','success')
      document.title='TextUtils | DarkMode'
      
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode is on', 'success');
    }
  }

  const purpleMode=()=>{
    if (mode !=='purple') {
      setMode('purple');
      document.body.style.backgroundColor = '#120E23';
      showAlert('Purple mode is on', 'success');
      document.title = 'TextUtils | PurpleMode';
      // setInterval(()=>{
      //  document.title="Install TextUtils Now"
      // },1000)
      //  setInterval(() => {
      //    document.title = 'SignIn';
      //  }, 3000);
    } 
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode is on', 'success');
    }
  }

    const pinkMode = () => {
      if (mode !== 'pink') {
        setMode('pink');
        document.body.style.backgroundColor = '#C2185B';
        showAlert('Pink mode is on', 'success');
        document.title = 'TextUtils | PinkMode';
      } else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert('Light mode is on', 'success');
        
      }
    };

  return (
    <>
      {/* <Router> */}
         <Navbar title="Text Utilities" mode={mode} toggleMode={toggleMode} purpleMode={purpleMode} pinkMode={pinkMode}/>
          <Alerts alert={alert} />
          <div className="container my-3">
            {/* <Routes> */}
              <TextForm heading="Word Analyzer" showAlert={showAlert} mode={mode}/>
              {/* <Route exact path='/about' element={<About mode={mode}/>} /> */}
            {/* </Routes> */}
          </div>
      {/* </Router> */}
    </>
  );
}

export default App;
