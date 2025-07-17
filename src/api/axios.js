import axios from 'axios'

const instance =  axios.create({
    // baseURL: 'http://localhost:4000/api',
  baseURL: 'https://tienda-online-backend.vercel.app/api',
    withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
    },
})


export default instance