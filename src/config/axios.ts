import axios from 'axios'
import { config } from './app.config'

export const apiClient = axios.create(
  {
    baseURL: config.apiURL,
    withCredentials: true,
    responseType: 'json'
  }
)
