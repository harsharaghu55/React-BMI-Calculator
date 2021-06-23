import "./App.scss"
import React,{useState} from "react";
import BimForm from "./components/bimForm/Bim_form"
import DialIndicator from "./components/dial_indicator/Dial_indicator"


function App() {
  
  const [bmi,setBmi] = useState(0)

  return (
    <div className="App">
      <BimForm setBmi={setBmi}/>
      <DialIndicator bmi={bmi}/>

    </div>
  );
}

export default App;
