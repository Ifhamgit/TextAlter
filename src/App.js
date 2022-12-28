
import React,{ useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
  const[mode, SetMode] = useState("light")
  const[alert,setAlert] = useState(null)

  const showAlert =(message, type) => {
    setAlert({
      msg: message,
      type: type
  })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
}
    // const RemoveBodyClassesFromToggleModeCls =()=>{
    //   document.body.classList.remove("bg-light")
    //   document.body.classList.remove("bg-dark")
    //   document.body.classList.remove("bg-danger")
    //   document.body.classList.remove("bg-warning")
    //   document.body.classList.remove("bg-success")
    //   document.body.classList.remove("bg-primary")
    // }




                      //Here we are making a class as "cls" becuase "class" is a reserved keyword in JS
                      //we define each color into cls to make its class and apply it on the body and "null" means no class or cls assigned.
  //const toggleMode = (cls) =>{
  const toggleMode = () =>{
    //RemoveBodyClassesFromToggleModeCls()
    //document.body.classList.add("bg-"+cls)
    if(mode === "dark"){
      SetMode("light")
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      
    
    }else{
      SetMode("dark")
      document.body.style.backgroundColor = '#131212'
      showAlert("Dark mode has been enabled", "success")
    }
  }
  return (
    <>
      <Router>
     <Navbar title = "TextAlter" mode ={mode} toggleMode ={toggleMode}/>
     <Alert alert ={alert}/>
     <div className="container my-3">
    
     <Routes>
            <Route path="/about" element={<About mode ={mode} />}>
            </Route>
            <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
      </Routes>
      
     </div>
     </Router>
    </>
    
  );
}

export default App;
