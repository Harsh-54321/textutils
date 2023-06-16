import './App.css';
import NAVBAR from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
   BrowserRouter as Router,
   Routes,
   Route
 } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');  //where show the darkmode on or off
  const [alert , setAlert] = useState(null);
  const showAlert = (message, type) => {
      setAlert({
         msg: message,
         type: type
      })
      
      setTimeout(() => {
         setAlert(null);
      }, 3000);
   }
   const removeclasses = () => {
      document.body.classList.remove('bg-light');
      document.body.classList.remove('bg-success');
      document.body.classList.remove('bg-danger');
      document.body.classList.remove('bg-warning');
   }
  const toggleMode = (cls) => {
      removeclasses();  
       if(mode === "light") {
          setMode("dark");
          document.body.style.backgroundColor= "gray";
          showAlert("Dark mode has been enabled" , "success");
          document.title = "TextUtils - Dark mode";
       } else {
          setMode("light"); 
          document.body.style.backgroundColor= " white"
          showAlert("LIght mode has been enabled" , "success")
          document.title = "TextUtils - Light mode";
       }
  }

  return (
   <>
      <Router>
         {/* <NAVBAR title = "TextUtils" aboutText = "About us"/> */}  
         <NAVBAR title = "TextUtils" mode={mode} toggleMode={toggleMode}/>

         <Alert alert = {alert}/>

         <div className="container my-3"> 
            <Routes>
               <Route exact path="/about" element={<About  mode={mode} />} />
               <Route  exact path="/" element={<TextForm showAlert = {showAlert} mode={mode} Heading="Try Textutils - word counter, character counter, Remove Extra Space "/> } />
               {/* <TextForm showAlert = {showAlert} mode={mode} Heading="Enter the TEXT below to Analyz:"/> */}
            </Routes>
         </div>  
      </Router>
   </>

  );
}

export default App;
