import React, {useState} from "react"
import { useRef } from "react"
import { useEffect } from "react"
import cl from "./Slider.module.css"

const Slider = ({img}) =>{
    const [moveSlider, setMoveSlider] = useState(0) 

    return( 
    <>
        
        <div className={cl.conteiner}>
            <div className={cl.slider} style={{marginLeft: moveSlider+'%', transition: '0.5s all ease'}}>
            {img?.map((img, index) => (
                 
                 <img key={index} className={cl.img} src={img.src} alt="" />
                 
                 
        ))}
            </div>
            <div className={cl.btnss}>
            <button className={cl.btn} onClick={()=>{
            if(0<=moveSlider){
            setMoveSlider((img.length-1)*100*-1)
            }else{
            setMoveSlider(moveSlider+100)
            }
        }
        }><span aria-hidden="true" className="carousel-control-prev-icon"></span></button>
        <button className={cl.btn} onClick={()=>{
             if((img.length-1)*100*-1>=moveSlider){
                setMoveSlider(0)
            }else{
                setMoveSlider(moveSlider-100)
            }
        }}><span aria-hidden="true" className="carousel-control-next-icon"></span></button>
        </div>
        </div>
        <div className={cl.blocks}>
        {img?.map((img, index) => (
                 
                 <img key={index} onMouseMove={()=>{
                    if(moveSlider!=index*-100){
                    setMoveSlider(index*-100)
                    }
                 }} className={cl.imgBlock} src={img.src} alt="" />
                
                 
        ))}
        </div>


    </>)
}

export default Slider