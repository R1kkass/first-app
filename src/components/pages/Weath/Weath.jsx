import React, { useEffect, useState } from "react";
import Api from "../../../API/PostService";
import './Weath.css'

const Weatch = ()=>{
    const api = new Api()
    const [weather, setWeather] = useState([])
    const fetchWeathers = async ()=>{
        setWeather(await api.fetchWeather())
        console.log(await api.fetchWeather());
    }

    useEffect(()=>{
        fetchWeathers()
    },[])
    return(
    <div className="Weatch">
        <p>
                Температура в г. Арзамас: { Math.round(weather?.data?.main?.temp-273.15)}&deg;
                
            </p>
        <p>Осущается как: { Math.round(weather?.data?.main?.feels_like-273.15)}&deg;</p>
        <p>Погода: {weather?.data?.weather[0]?.description=="light snow" ? <h1>🌨</h1> : weather?.data?.weather[0]?.description}</p>
        <p>Влажность: {weather?.data?.main?.cloud?.all}</p>
        <p>Скорость ветра: {weather?.data?.main?.speed}</p>
        <p>Скорость ветра: {weather?.data?.main?.speed}</p>
    </div>
    )
}

export default Weatch