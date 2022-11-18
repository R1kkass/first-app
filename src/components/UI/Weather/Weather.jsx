import React, { memo, useState } from "react";
import { useEffect } from "react";
import Api from "../../../API/PostService";
import './Weather.css'

const Weathers = ({style})=>{
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
        <div style={{...style}}>
            <p>
                Температура в г. Арзамас: { Math.round(weather?.data?.main?.temp-273.15)}&deg;
                
            </p>
            <p>Погода: {weather?.data?.weather[0]?.description}</p>
            <p>Влажность: {weather?.data?.clouds.all}%</p>
        </div>
    )
}

let Weather
 
export default Weather = memo(Weathers)