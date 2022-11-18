import React from "react";
import './Card.css'
import {Link} from 'react-router-dom'
import { useEffect } from "react";
import { useState } from "react";

const Card = ({product, p})=>{
    let a
    const [b,setB] = useState(0)
    useEffect(()=>{
        a = product.price.replace(/\s/g, '').replace(/[a-zа-яё]/gi, '')
        setB(Number(a)*1000*0.5);
        console.log(b);
    })
    

    return(  
        <Link to="/device/1">
        <div className="Card">
            <div className="sds">
            <div className="Card__img">
            <img alt='' src={product.img}></img>
            </div>
            
            <p className="Card__name">{product.name}</p>
            {!p ? <p className="Card__price">{product.price + product.id}</p> : <p style={{textDecoration: 'line-through'}} className="Card__price">{product.price + product.id}</p>} 
            
            {p ? <p>Новая цена: {b}</p> : ''}
        </div>
        </div>
        </Link>
    )
}

export default Card