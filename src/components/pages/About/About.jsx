import React from "react";
import { Link } from "react-router-dom";
import Card from "../../UI/Card/Card";
import MyButton from "../../UI/MyButton/MyButton";
import Parallax from "../../UI/Parallax/Parallax";
import './About.css'

const About = ()=>{
    document.title="Интернет-сайт Aima"
    const product = [
        {
            id:1,
            name:'Тахометр',
            price: '5.000 рублей',
            img: 'https://upload.wikimedia.org/wikipedia/ru/3/3f/%D0%A2%D0%B0%D1%85%D0%BE%D0%BC%D0%B5%D1%82%D1%80.jpg',
        },
        {
            id:2,
            name:'Нивелир',
            price: '5.000 рублей',
            img: 'data:image/jpeg;base64,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',
        },
        {
            id:3,
            name:'Нивелир',
            price: '5.000 рублей',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Kern_Theodolit_DKM2-A.jpg/200px-Kern_Theodolit_DKM2-A.jpg',
        },
        {
            id:4,
            name:'Тахометр',
            price: '5.000 рублей',
            img: 'https://upload.wikimedia.org/wikipedia/ru/3/3f/%D0%A2%D0%B0%D1%85%D0%BE%D0%BC%D0%B5%D1%82%D1%80.jpg',
        },

    ]
    return(
    <>
    <Parallax></Parallax>
    <div className="About">
        <h1>Каталог</h1>
        <div class="About__card">
        {
                    product?.map((product)=>(
                        <Card key={product.id} product={product}></Card>
                    ))
                }
        </div>

        <div className="About__grid">
            
                <div>
                <Link to="/landing">
                О компании
                </Link>
            </div>
            
            <div>
                <Link to="/contact">
                Контакты
                </Link>
            </div>
            <div>
                <Link to="/paymantdelivery">
                Доставка и оплата
                </Link>
            </div>
        </div>
        <div className="About__form">
                <div>
                    <h1>Подписаться на новости и скидки</h1>
                    <input placeholder="E-Mail"/>
                    <MyButton color={'pink'}>Подписаться</MyButton>
                </div>
                <div>
                    <img alt ="" src="https://vkurske.com/media/imgs2018/3_h7DrIHE.jpg" />
                </div>
        </div>
    </div>
    </>
    )
}

export default About