import axios from './axios'

const API = 'http://localhost:4000/api'
// const API = 'https://online-store-backend-xi.vercel.app/api'

export const registerRequest = user => axios.post(`/register`, user)

export const loginRequest = user => axios.post(`/login`, user)

export const verityTokenRequest = () => axios.get(`/verify`)