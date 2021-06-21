import React,{useState,useEffect} from "react"


function DialIndicator(){

    const [deg,setDeg] = useState(0)
    
    useEffect(()=>{
      deg < 180 && setTimeout(()=>setDeg(deg+12),1000)
    },[deg])

    return(
        <div className="clock">
            <div className="circle">
                <div className="dil" style={{ transform:`rotate(${deg}deg)`}}>
                    
                </div>
            </div>
            <div>

            </div>
            <button onClick={()=>{setDeg(0)}}>reset</button>
      </div>
    )
}

export default DialIndicator