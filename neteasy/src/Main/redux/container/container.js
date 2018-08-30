import { showWeather } from "../actions";
import { connect } from "react-redux";
import Weather from "../../maincontent/weather/weather";

const mapStateToProps=(state)=>{
  return {city:state.weatherData.city,
    wind:state.weatherData.wind,
    pic:state.weatherData.pic,
    weather:state.weatherData.weather,
    temperature:state.weatherData.temperature
  }
}

const mapDispatchToProps=dispatch=>{
  return {
    changeCity:(city)=>{
        dispatch(showWeather(city))
    }
  }
}

const WeatherContainer=connect(mapStateToProps,mapDispatchToProps)(Weather);
export default WeatherContainer;