
import './App.css';

import Navbar from './component/Navbar';
import Form from './component/Form';
import { useState } from "react";
import Alert from "./component/Alert";

function App() {

  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
     setAlert(
      {
        msg: message,
        type: type
      }
     )

     setTimeout(() => {
        setAlert(null);
     }, 1500);
  }

  const toggleMode = () => {
    // removeBodyClasses();
    // console.log(cls);
    // document.body.classList.add('bg-' + cls)
     if(mode === "light") {
       setMode('dark');
       document.body.style.backgroundColor='#042743';
       showAlert("Dark mode has been Enabled", "sucess");
      //  document.title = "TextUtils - Dark Mode";
     }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been Enabled", "sucess");
      // document.title = "TextUtils - Light Mode";
     }
  }

  return (
      <>
        <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      
          <Form  showAlert={showAlert} heading="Try TextUtils - Word Counter, Character counter, Remove extra spaces " mode={mode} />
       

      </div>
      </>
   
  );
}

export default App;
