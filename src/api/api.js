import axios from 'axios'

const api = axios.create({
    //trocar pelo seu ip local (ipconfig)
    baseURL: 'http://192.168.1.13:3000'
})


export default api