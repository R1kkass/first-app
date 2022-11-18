import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import MyButton from "../../UI/MyButton/MyButton";
import './Authorization.css'

const Authorization = () =>{
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    document.title="Авторизация"
    const [er,setEr]=useState([])
    const [er2,setEr2]=useState([])

    const validate =()=>{
        if(reg.test(login.current.value)==false){
            setEr({border: 'solid 1px red', boxShadow: '0 0 15px 4px red'});
        }
        
        else if(passowrd.current.value.length<7){
            setEr2({border: 'solid 1px red', boxShadow: '0 0 15px 4px red'});
        }
        else{
            setEr({})
            setEr2({})
        }
        console.log(passowrd.current.value.length)
    }

    const login = useRef('')
    const passowrd = useRef('')
    return(
        <div className="Authorization">
            <div>
            <h1>Авторизация</h1>
            <input placeholder="E-Mail" ref={login} style={er}/>
            <input type="password" placeholder="Пароль" style={er2} ref={passowrd}/>
            <button onClick={validate}>Авторизоваться</button>
            <p><Link to="/registration">Регистрация</Link></p>
            </div>
        </div>
    )
}

export default Authorization