import Axios from "axios";

const changeCity = (city, wind, pic, weather, temperature) => {
  return {
    type: 'CHANGE_CITY',
    city,
    wind,
    pic,
    weather,
    temperature
  }
}

export const showWeather = (city = '广州') => {
  return function (dispatch) {
    Axios.get('https://saweather.market.alicloudapi.com/spot-to-weather', { headers: { "Authorization": "APPCODE 8655d3a2abeb4239827049dceb363bc8" }, params: { area: city } })
      .then(function (res) {
        console.log(res.data);
        if (res.status >= 200 && res.status < 300 || res.status == 304) {
          let data = res.data.showapi_res_body;
          dispatch(changeCity(data.cityInfo.c5, data.now.wind_direction + data.now.wind_power, data.now.weather_pic, data.now.weather, data.now.temperature));
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

}