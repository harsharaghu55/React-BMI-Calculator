import React,{useState,useEffect} from "react"


function DialIndicator({bmi}){

    const [deg,setDeg] = useState(0)
    
    useEffect(()=>{
      deg < 180 && setTimeout(()=>setDeg(deg+12),1000)
    },[deg])

    return(
      <div className="gauge">
        <div className="gauge_body">
          <div className="gauge_fill" style={{transform: `rotate(${(bmi/35)*0.5}turn)`}}></div>
          <div className="gauge_cover">
            <h2 style={{padding:"5em",position:"relative",top:"8em"}}>{bmi}</h2>
          </div>
        </div>
      </div>
    )
}

export default DialIndicator


// <div className="clock">
//             <div className="circle">
//                 <div className="dil" style={{ transform:`rotate(${deg}deg)`}}>
                    
//                 </div>
//             </div>
//             <div>

//             </div>
//             <button onClick={()=>{setDeg(0)}}>reset</button>
//       </div>