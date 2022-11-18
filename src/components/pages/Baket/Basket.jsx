import React, { useState } from "react";
import './Basket.css'
import MyButton from "../../UI/MyButton/MyButton"
import { product } from "../../../ArrayBD/Array";
import MyModal from "../../UI/Modal/MyModal";

const Basket = ()=>{
    document.title="Корзина"
    const [post, setPost] = useState(product)
    const [nameModal,setNameModal] = useState('')
    const [visible,setVisible] = useState('')
    const [modal,setModal] = useState('')
    const deleteOrder = (ids)=>{
        setPost(post?.filter((product)=>{
                return product.id !== ids  
        }))

    }

    return(
        <div className="Basket">
            <div className="Basket__menu">
                <div className="Menu__mainWindow">
                    <p>Количество товаров: {post.length}</p>
                    <div className="MainWindow__buy">
                    <MyModal click={()=>{setModal(true)
                    setNameModal('Modal2')}} nameButton={"Купить"} inf={nameModal} visible={modal} setVisible={setModal} nameModal={'Modal2'} >
                        <input />
                        <input />
                        <MyButton color="indigo">Купить</MyButton>
                     </MyModal>   
                     </div>
                </div>
            </div>
            <div className="Basket__order">
                {post.length>0?
                    post?.map((product)=>(
                        <div key={product.id} className="Order__card">
                    <div className="Card__img">
                        <div>
                        <img src={product.img} />
                        </div>
                        <div>
                        <h1>{product.name}</h1>
                        <p>{product.price}</p>
                        </div>
                    </div>
                    
                    <div className="Card__button" onClick={()=>deleteOrder(product.id)}>
                        <MyButton color={"red"} >Удалить</MyButton>
                        
                    </div>
                </div>
                
                    ))
                    : <h1>Корзина пуста</h1>
                }
                
            </div>
        </div>
    )
}

export default Basket