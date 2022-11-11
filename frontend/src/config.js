import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://ecommerce-app-store.herokuapp.com/',
})
