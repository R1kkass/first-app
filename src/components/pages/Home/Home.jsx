import React, { useEffect, useRef, useState } from "react";
import Card from "../../UI/Card/Card";
import Menu from "../../UI/Menu/Menu";
import "./Home.css"
import { product } from "../../../ArrayBD/Array";

const Home = ()=>{
    document.title="Каталог товаров"

    const search = useRef('')
    const [pag, setPag] = useState('')
    const [post, setPost] = useState(product)
    const [cont,setCont] = useState([]);
    const pagg=[]
    let p = []
    
    const pagMove=(i)=>{
        
        p = (product.filter((product)=>{
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
   
        for (let i = 0; i < (product.length/4); i++) {
            pagg.push(<div onClick={()=>pagMove(i)}>{i+1}</div>)

        }
        setCont(pagg)
    }
    const find = ()=>{
        setPost(product.filter((product)=>{
            return product.name.includes(search.current.value)
        }))
        console.log(post);
        pagination()
    }
    useEffect(()=>{
        setPost(product)
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
                        <Card key={product.id} product={product}></Card>
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

export default Home