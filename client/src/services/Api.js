import axios from 'axios'
<<<<<<< HEAD
import { useAuthenStore } from '../stores/authen'

export default () => {
    const authenStore = useAuthenStore()
    
    return axios.create({
        baseURL: 'http://localhost:8081/',
        headers: {
            Authorization: `Bearer ${authenStore.token}`
        }
=======

export default () => {
    return axios.create({
        baseURL: 'http://localhost:8081/',
>>>>>>> d04cf2273d2c40046cb6ce93843f5d32e0abe2d9
    })
}