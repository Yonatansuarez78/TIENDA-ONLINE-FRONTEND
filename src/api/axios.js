import axios from 'axios'

const instance =  axios.create({
    baseURL: 'http://localhost:4000/api',
    // baseURL: 'https://online-store-backend-xi.vercel.app/api',
    withCredentials: true,

      headers: {
        'Content-Type': 'application/json',
    },
})

export default instance