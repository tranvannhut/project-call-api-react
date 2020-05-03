import axios from 'axios'
import * as config from './../constants/ConfigLink'
export default function apiCaller(method = "GET", endpoint, body) {
  return axios({
    method: method,
    url: `${config.URL_CONFIG}/${endpoint}`,
    data: body
  }).catch(err => console.log(err))
}