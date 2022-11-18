import React, { useEffect, useRef, useState } from "react";
import Card from "../../UI/Card/Card";
import Menu from "../../UI/Menu/Menu";
import "./Home.css"
import { product1 } from "../../../ArrayBD/Array";

const News = ()=>{
    document.title="Каталог товаров"

    const search = useRef('')
    const [pag, setPag] = useState('')
    const [post, setPost] = useState(product1)
    const [cont,setCont] = useState([]);
    const pagg=[]
    let p = []
    
    const pagMove=(i)=>{
        
        p = (product1.filter((product)=>{
            return product.name.includes(search.current.value)
        }))
        
        pagination()
        if(i>0){
            setPost(p.slice(i*4,i*4+4))    
        }else{
            setPost(p.slice(i,i+4))    
        }
    }

    const pagination = () =>{
        pagg.length=0
   
        for (let i = 0; i < (product1.length/4); i++) {
            pagg.push(<div onClick={()=>pagMove(i)}>{i+1}</div>)

        }
        setCont(pagg)
    }
    const find = ()=>{
        setPost(product1.filter((product)=>{
            return product.name.includes(search.current.value)
        }))
        console.log(post);
        pagination()
    }
    useEffect(()=>{
        setPost(product1)
        pagination()
    },[])
    console.log('render');
    return(
        <div className="Home">
            <Menu style={{transition: '0.2s'}}></Menu>
            <div>
            <div className="Home__search">
                <input ref={search} placeholder="Найти..."/>
                <button onClick={find}>Поиск</button>
            </div>
            <div className="Home__cards">
                {
                    post?.map((product)=>(
                        <div className="Card">
                        <div className="sds">
                        <div className="Card__img">
                        <img alt='' src={product.img}></img>
                        </div>
                        
                        <p className="Card__name">{product.name}</p>
                        {!p ? <p className="Card__price">{product.price + product.id}</p> : <p style={{textDecoration: 'line-through'}} className="Card__price">{product.price + product.id}</p>} 
                        
                        
                    </div>
                    </div>
                    ))
                }
            </div>
            <div className="Home__pagination">
                {cont}
            </div>
            </div>
        </div>
    )
}

export default News