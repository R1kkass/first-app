import React from "react";
import './Parallax.css'
import MyButton from "../../UI/MyButton/MyButton"
import {Link} from "react-router-dom"

const Parallax=()=>{
    return( 
        <>
        <div className="parallax">
            
            <div style={{overflow:'hidden'}}>
                
                </div>
                <p className="parallax__text">Интернет-магазин по
                <br/>
                     продаже светотехники
                     <Link to="/device">
                        <MyButton color={'indigo'} style={{width: '50%', height: 60}}>В каталог</MyButton>
                     </Link>
                </p>

                
            <p className="parallax__window">
                

            </p>
        </div>
        
        </>
    )
}

export default Parallax