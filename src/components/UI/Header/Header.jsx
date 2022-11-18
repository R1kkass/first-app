import React, { useState } from "react";
import { useEffect } from "react";
import Api from "../../../API/PostService";
import Weather from "../Weather/Weather";
import './Header.css';
import {Link} from "react-router-dom";
import Timer from "../Timer/Timer"

const Header = ({children}) => {

    const f = ()=>{
        if(window.scrollY>100 && root.offsetWidth>1000 && head[0].height==155){
            setStyles({height: 60, mains: 155, width: 100})
            
            head[0].height=60
        }else if(window.scrollY<100 && root.offsetWidth>1000 && head[0].height==60){
            setStyles({height: 155,mains: 155,width: 200})
            head[0].height=155
            
        }else if(root.offsetWidth<1000 && head[0].height==155){
            head[0].height=60
            setStyles({height: 60, display: 'none',mains: 60})
        }
    }



    console.log('render');
    const [timer, setTimer] = useState('')
    var head =[{height: 155}]
    const [styles, setStyles] = useState({main: 155, width: 200})
    useEffect(()=>{
        window.addEventListener('scroll',()=> f())
       
    return () => window.removeEventListener('scroll', ()=>f()
    );
    },[])

    
    

    let [visiblePhone,setVisiblePhone] = useState(false)
    const [visibleDisplay, setVisibleDisplay] = useState('-100%')
    const menuPhones = ()=>{
        setVisibleDisplay('block')
        console.log(visiblePhone);
        if (visiblePhone){
            setVisiblePhone(false)
            setVisibleDisplay('-100%')
        }else{
            setVisiblePhone(true)
            setVisibleDisplay('0%')
        }
    }
    return(
        <>
        <div className="content">  
        <div style={{marginLeft: visibleDisplay, width: '100%', height:'100vh', position:'fixed', transition: '0.3s'}} onClick={menuPhones}>
        <div className="menuPhone"  onClick={(e)=>e.stopPropagation()}>
        
            <div className="menuPhone__text">
                <Link to="/landing"><div className="Main__link">О компании</div></Link>
                <Link to="/paymantdelivery"><div className="Main__link">Оплата и доставка</div></Link>
                <Link to="/servicesequipment"><div className="Main__link">Сервисное оборудование</div></Link>
                <Link to="/sale"><div className="Main__link">Спецпредложения и скидки</div></Link>
                <Link to="/contact"><div className="Main__link">Контакты</div></Link>
                <Link to="/authorization"><div className="Main__link">Авторизация</div></Link>
                <Link to="/basket"><div className="Main__link">Корзина</div></Link>
            </div>
        </div>
        </div>
        <div style={{height: styles.mains || styles.main, width: '100%'}}>
        <div style={{height: styles.height, transition: '0.2s'}} className="Header">
           
            <div className="Header__icon">
                <Link to="/">
                    <img alt="" src="logo.png" style={{height: styles.height || styles.main, width: styles.width || styles.main-20, transition: '0.3s'}}/>
                </Link>
            </div>
            
            <div className="Header__main">
            <Link to="/landing"><div className="Main__link">О компании</div></Link>
            <Link to="/paymantdelivery"><div className="Main__link">Оплата и доставка</div></Link>
                <Link to="/servicesequipment"><div className="Main__link">Сервисное оборудование</div></Link>
                <Link to="/sale"><div className="Main__link">Спецпредложения и скидки</div></Link>
                <Link to="/contact"><div className="Main__link">Контакты</div></Link>
                <Link to="/authorization"><div className="Main__link">Авторизация</div></Link>
                <div className="Main__menu" onClick={()=>menuPhones()}>Меню</div>
            </div>
            <div style={{display: head.display}}  className="Header__basket">
                <div className="Weather">
                    <Weather style={{display: styles.opacity, transition: '0.3s'}}/>
                    <Timer />
                </div>
                <div className="bask">
                       <Link to="/basket"> <p>Корзина</p></Link>
                </div>
                <div>
                    <h2>(343)-333-33-33</h2>
                    <a>mail@gmail.ru</a>
                    <br />
                    <a>г. Арзамас, ул. Ленина 37</a>
                </div>
            </div>
        </div>
        </div>
        
        {children}
        </div>
        <div className="Footer">
            <p>Все права защищены</p>
            <a>Информация о разработчике</a>
            <div>
            <a><img alt="" src="https://cdn-icons-png.flaticon.com/512/739/739260.png"/></a>
            <a href="https://vk.com/andreqqqqqqqq" target="_blank"><img alt="" src="https://cdn-icons-png.flaticon.com/512/2111/2111828.png"/></a>
            <a><img alt="" src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png"/></a>
            </div>
        </div>
        </>
    )
}

export default Header