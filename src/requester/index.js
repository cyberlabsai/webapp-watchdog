import axios from 'axios'

const http = axios.create({
  baseURL: 'http://173.230.131.38:3666',
  timeout: 1000000
})

export default http
