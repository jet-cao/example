import { combineReducers } from 'redux'
import { loadSportnews, loadsYulenews } from './sportnewsaction';

const weatherData = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_CITY':
      return {
        city: action.city,
        wind: action.wind,
        pic: action.pic,
        weather: action.weather,
        temperature: action.temperature
      }
    default:
      return state
  }
}

const sportnews = (state = [], action) => {
  switch (action.type) {
    case loadSportnews:
      return action.data
    default:
      return state
  }
}

const yulenews = (state = [], action) => {
  switch (action.type) {
    case loadsYulenews:
      return action.data
    default:
      return state
  }
}

const todoApp = combineReducers({ weatherData, sportnews, yulenews });

export default todoApp;