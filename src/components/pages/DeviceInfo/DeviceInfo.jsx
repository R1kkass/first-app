import React, { useState } from "react";
import MySlider from "../../UI/MySlider/MySlider";
import './DeviceInfo.css'
import Button from 'react-bootstrap/Button';
import MyButton from "../../UI/MyButton/MyButton";
import Hidden from "../../UI/Hidden/Hidden";
import { postFeedback } from "../../../ArrayBD/Array";
import Slider from "../../UI/Slider/Slider";

const DeviceInfo = ()=>{
    console.log('render');
    const [content, setContent] = useState('')
    const feedback = () =>{
        setContent(
            <div >
                {postFeedback.map((post)=>(
                    <div className="feedBack" key={post.id}>
                        <p>{post.user}</p>
                        <p>{post.text}</p>
                        <p>{post.rait}</p>
                    </div>
                ))}
            </div>
        )
    }

    console.log('render');
    document.title="Карточка товара"
    return(
        <div className="DeviceInfo">
            <div className="DeviceInfo__firstInf">
                <div className="FirstInf__slider">
                    <Slider img={[{src: 'https://upload.wikimedia.org/wikipedia/ru/3/3f/%D0%A2%D0%B0%D1%85%D0%BE%D0%BC%D0%B5%D1%82%D1%80.jpg'},{src: 'https://amastercar.ru/articles/img/tahometr_new.jpg'}]}></Slider>
                </div>
                <div className="FirstInf__text">
                    <h2>Тахометр З-3уц</h2>
                    <p>Цена: 2000Р</p>
                    <div class="rating-result">
                        <span class="active"></span>	
                        <span class="active"></span>    
                        <span class="active"></span>  
                        <span></span>    
                        <span></span>
                    </div>
                    <h3>Цифровой тахометр используется для измерения скорости вращения, определения числа оборотов любых вращающихся устройств. Прибор обладает высокой надежностью и высокими показателями безопасности. Тахометр определяет точную скорость вращения объекта через датчик Холла и магнит который крепится на вращающийся предмет.</h3>
                    <MyButton style={{margin: 20}}>В корзину</MyButton>
                    <Hidden name={'Характеристики'}>-Крутой</Hidden>
                    <Hidden name={'Характеристики'}>-Крутой</Hidden>
                    <Hidden name={'Характеристики'}>-Крутой</Hidden>
                </div>
            </div>
            <div className="DeviceInfo__secondInf">
                <div className="SecondInf__button">

                </div>
                <div className="Second__content">
                <div className="form_radio_btn">
	<input id="radio-1" type="radio" name="radio" value="1"  /> 
	<label for="radio-1" onClick={feedback}>Отзывы</label>
</div>
 
<div className="form_radio_btn">
	<input id="radio-2" type="radio" name="radio" value="2" />
	<label for="radio-2">Вопросы и ответы </label>
</div>
        {content}
                </div>
            </div>
        </div>
    )
}   

export default DeviceInfo