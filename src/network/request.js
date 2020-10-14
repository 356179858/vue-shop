import axios from 'axios'

export function request(config) {
  const instance = new axios.create({
    baseURL:'http://127.0.0.1:8888/api/private/v1/',
    timeout:5000
  });
  Vue.prototype.$http = axios
  return instance(config)
}
