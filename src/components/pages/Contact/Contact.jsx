import React from "react";
import Hidden from "../../UI/Hidden/Hidden";
import MyButton from "../../UI/MyButton/MyButton";
import './Contact.css'

const Contact = ()=>{
        document.title="Контакты"

        return(
        <div className="Contact">
            <div className="Contact__form">
                <div className="Form__window">
                    <input  placeholder="Имя"/>
                    <input placeholder="Фамилия"/>
                    <input placeholder="Отчество"/>
                    <textarea />
                    <MyButton color="pink">Отправить</MyButton>
                </div>
            </div>
            <div className="Contact__text">
                <h1>Как Мы можем помочь?</h1>
                <p>Пожалуйста, выберите раздел который подходит под описание Вашей проблемы. 
                    Если Вы не нашли нужный Вам раздел, Вы можете обратиться через форму, подробно описав Вашу проблему. 
                </p>
                <Hidden name="Заказ">kkk</Hidden>
                <Hidden name="Доставка">kkk</Hidden>
            </div>
        </div>
    )
}

export default Contact