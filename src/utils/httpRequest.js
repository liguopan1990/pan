

import axios from 'axios'
import router from '@/router/index'

var NODE_ENV = process.env.NODE_ENV

const http = axios.create({
    timeout: 1000 * 300,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})


http.interceptors.request.use(config => {
    if(NODE_ENV == 'development'){
        config.url = '/data' + config.url
    }

    return config
}, error => {
    return Promise.reject(error)
})

http.interceptors.response.use(response => {
    if(response.data && response.data.msg == 'deny'){
        router.push('/login')
    }
    return response;
})

http.getENV = () => {
    return NODE_ENV == 'development' ? true : false
}

export default http
