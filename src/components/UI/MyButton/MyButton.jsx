import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './MyButton.css'

const MyButton = ({children, style, color, click})=>{
    const [clas, setClas] = useState('')

    useEffect(()=>{ 
    if(color=="indigo"){
        setClas('myButtonIndigo')
    }else if(color=="red"){
        setClas('myButtonRed')
    }else if(color=="pink"){
        setClas('myButtonPink')
    }
    else{
        setClas('myButton')
    }
    },[])

    return(
        <>
        <button style={style} className={clas} onClick={click}>
            {children}
        </button>
        </>
    )
}

export default MyButton