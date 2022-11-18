import React, { useRef, useState } from "react";
import MyButton from "../../UI/MyButton/MyButton";
import './Authorization.css'

const Authorization = () =>{
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    document.title="Регистрация"
    const [er,setEr]=useState([])
    const [er2,setEr2]=useState([])
    const [er3,setEr3]=useState([])
    const [err,setErr]=useState('')

    const validate =()=>{
        if(reg.test(login.current.value)==false){
            setEr({border: 'solid 1px red', boxShadow: '0 0 15px 4px red'});
            setErr('E-Mail введён некорректно')
        }
        
        else if(passowrd.current.value.length<7 || passowrd2.current.value.length<7){
            setEr2({border: 'solid 1px red', boxShadow: '0 0 15px 4px red'});
            setErr('Пароль введён некорректно')
        }else if(passowrd.current.value != passowrd2.current.value){
            setEr2({border: 'solid 1px red', boxShadow: '0 0 15px 4px red'});
            setEr3({border: 'solid 1px red', boxShadow: '0 0 15px 4px red'});
            setErr('Пароли не совпадают')
        }
        else{
            setEr({})
            setEr3({})
            setEr2({})
            setErr('')
        }
        console.log(passowrd.current.value.length)
    }

    const login = useRef('')
    const passowrd = useRef('')
    const passowrd2 = useRef('')
    return(
        <div className="Authorization">
            <div>
            <h1>Регистрация</h1>
            <input placeholder="E-Mail" ref={login} style={er}/>
            <input type="password" placeholder="Пароль" style={er2} ref={passowrd}/>
            <input type="password" placeholder="Повторите пароль" style={er3} ref={passowrd2}/>
            <p>{err}</p>
            <button onClick={validate}>Регистрация</button>
            </div>
        </div>
    )
}

export default Authorization