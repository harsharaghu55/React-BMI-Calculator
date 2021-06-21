import "./App.scss"
import React,{useEffect,useState} from "react";
import BimForm from "./components/bimForm/Bim_form"
import DialIndicator from "./components/dial_indicator/Dial_indicator"

function App() {

  return (
    <div className="App">
      <BimForm/>
      <DialIndicator/>

    </div>
  );
}

export default App;
