import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 1000,
  headers: {
    'X-Auth-Key': 'a87sydhoauilnjdkuy6t162eh89y18a'
  }
})