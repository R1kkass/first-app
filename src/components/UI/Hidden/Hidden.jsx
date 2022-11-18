import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './Hiden.css'


export default function Hidden({children, name}){
    const [visible, setVisible] = useState('')
    let state = true
    const [plus, setPlus] = useState("+")
    const [bl, setBl] = useState(0)

    const vis = ()=>{   
    
    console.log(state);
    
    if(!visible){
        setVisible(`${children}`)

        setBl(1)
    }else{
        setBl(0)
        setVisible('')

    }
    }

    useEffect(()=>{
        
    },[state,visible])

    return(
        <div onClick={()=> {vis()}} className="Hidden">
        <div >
            <div className="Hidden__main" style={{display: 'block',overflow: 'hidden',  transition: '0.3s'}}>
                <div style={{display: 'flex', alignItems:'center'}}>
            <h4>
            {name}
            </h4>

            </div>
            <ul>
        <li style={{opacity: bl, transition: '0.5s'}}  className="Show">
            {visible}
        </li>
        </ul>
            </div>
        </div>
        </div>
    )

}

