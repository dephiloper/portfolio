import axios from 'axios'
import apiConfig from '../../config/api'

export const axiosClient = axios.create({
  baseURL: apiConfig.API_URL,
})
