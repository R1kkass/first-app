import React, { memo, useState } from "react";
import { useEffect } from "react";
import './Timer.css'
const Timer = ()=>{
    const [timer, setTimer] = useState('')
    useEffect(()=>{
    let interval = setInterval(()=>{
        setTimer(
            <>
            {new Date().toLocaleDateString()}
            <br/>
            {new Date().toLocaleTimeString()}
            </>
            )
    },1000)
    
    return () => clearInterval(interval);
    },[])

    return(
        <>
        <p className="Timer">
            {timer}
            </p>
        </>
    )
}

export default memo(Timer)