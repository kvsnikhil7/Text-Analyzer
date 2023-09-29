// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type) => {
    setAlert({
      msg:  message,  
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
    
  }
const toggleMode = () => {
  if(mode === 'dark'){
    setmode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("light mode has been enabled","success");
  }
  else{
    setmode('dark');
    document.body.style.backgroundColor = '#001130';
    showAlert("dark mode has been enabled","success");
  }
}

  return (
  <>
  <Navbar title = 'textUtils2' about = 'about TextUtils' mode = {mode} toggleMode = {toggleMode}/>
 <Alert alert = {alert}></Alert>
  <div className="container">
  <TextForm heading = 'Enter the text to analyze' showAlert = {showAlert} mode = {mode} />
    {/* <About/> */}

  </div>
 </>
  );
}

export default App;
