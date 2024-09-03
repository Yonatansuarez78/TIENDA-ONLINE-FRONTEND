import axios from 'axios'

const instance =  axios.create({
    // baseURL: 'http://localhost:4000/api',
  baseURL: 'https://whispering-beyond-09111-acac443e4a38.herokuapp.com/api',
    withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
    },
})

export default instance