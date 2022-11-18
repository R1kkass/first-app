import axios from "axios"

class Api {
    async fetchWeather(){
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=arzamas&appid=70e1ed322b02acbc57d443dd91065f3e')
        return response
    }
}

export default Api