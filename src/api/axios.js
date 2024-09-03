import axios from 'axios'

const instance =  axios.create({
    // baseURL: 'http://localhost:4000/api',
  baseURL: 'https://onlinestore-6b35bdf62a93.herokuapp.com/api',
    withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
    },
})

export default instance