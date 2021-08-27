import axios from 'axios';
import store from '../store';
import { authConstants } from '../actions/constants';

const token = window.localStorage.getItem('token');

const axiosIntance = axios.create({
    baseURL: "https://doan-tutor123.herokuapp.com",
    headers: {
        "content-type": "application/json",
        'Authorization': token ? `Bearer ${token}` : ''
    }
});

axiosIntance.interceptors.request.use((req) => {
    // req.headers = { Authorization: 'Bearer ' + localStorage.getItem('token') }; 
    const { auth } = store.getState();
    if(auth.token){
        req.headers.Authorization = `Bearer ${auth.token}`;
    }
    return req;
})

axiosIntance.interceptors.response.use((res) => {
    return res;
}, (error) => {
    console.log(error.response);
    const status = error.response ? error.response.status : 500;
    if(status && status === 500){
        localStorage.clear();
        store.dispatch({ type: authConstants.LOGOUT_SUCCESS });
    }
    return error.response;
})

export default axiosIntance;