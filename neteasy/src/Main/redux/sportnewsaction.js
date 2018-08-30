import Axios from "axios";

export const loadSportnews = 'LOAD_SPORT';
export const loadsYulenews = 'LOAD_YULE';
const newsaction = function (data, type) {
  return {
    type,
    data
  }
}

export const loadNews = function (type) {
  return function (dispatch) {
    Axios.get('http://toutiao-ali.juheapi.com/toutiao/index', { params: { type: type }, headers: { "Authorization": "APPCODE 8655d3a2abeb4239827049dceb363bc8" } })
      .then(function (res) {
        let data = res.data.result.data
        console.log(data);
        let choosetype
        if (type == 'tiyu') {
          choosetype = loadSportnews
        } else if (type = 'yule') {
          choosetype = loadsYulenews
        }
        dispatch(newsaction(data, choosetype))
      })
      .catch(function (err) {
        console.log(err)
      })
  }
}