import axios from 'axios'

const httpInstance = axios.create({
  baseURL: 'https://fakestoreapi.com',
})

export default httpInstance
