import axios from 'axios'

const http = axios.create({
  baseURL: 'http://172.16.109.109:5000',
  timeout: 1000000
})

export default http
