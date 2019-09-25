import { axiosWithAuth } from '../utils/axiosWithAuth.js';
import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

//posting to BE api for token
export const login = (creds, history) => dispatch => {
    dispatch({ type: LOGIN_START });
    axios.post(`https://appraisersbff.herokuapp.com/auth/login`, creds)
    .then(res => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
        localStorage.setItem('token', res.data.token);
        history.push('/appraise');
    })
    .catch(err => dispatch({ type: LOGIN_FAIL, payload: err}))
};

//creating a user from BE api
export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';

export const signUp = (user) => dispatch => {
    dispatch({ type: SIGNUP_START });
    axios
        .post(`https://appraisersbff.herokuapp.com/auth/register`, user)
        .then(res => dispatch({ type: SIGNUP_SUCCESS }))
        .catch(err => dispatch({ type: SIGNUP_FAIL, payload: err }));
}

export const GET_HOUSE_START = 'GET_HOUSE_START';
export const GET_HOUSE_SUCCESS = 'GET_HOUSE_SUCCESS';
export const GET_HOUSE_FAIL = 'GET_HOUSE_FAIL';

export const getHouse = () => dispatch => {
    dispatch({ type: GET_HOUSE_START });
    axiosWithAuth()
        .get(`/houses`)
        .then(res => console.log("GETHOUSE RES: ", res))
        .catch(err => dispatch({ type: GET_HOUSE_FAIL, payload:err }));
}

//sends information to BE -> DS to be put into algo
export const POST_HOUSE_START = 'POST_HOUSE_START';
export const POST_HOUSE_SUCCESS = 'POST_HOUSE_SUCCESS';
export const POST_HOUSE_FAIL = 'POST_HOUSE_FAIL';

export const postHouse = (house) => dispatch => {
    dispatch({ type: LOGIN_START });
    axiosWithAuth()
        .post(`/houses`, house)
        .then(res => console.log("POSTHOUSE RES: ", res))
        .catch(err => dispatch({ type: POST_HOUSE_FAIL, payload:err }));
}

// hoping this will get price from DS to display
export const GET_PRICE_START = 'GET_PRICE_START';
export const GET_PRICE_SUCCESS = 'GET_PRICE_SUCCESS';
export const GET_PRICE_FAIL = 'GET_PRICE_FAIL';

export const getPrice = () => dispatch => {
    dispatch({ type: GET_PRICE_START });
    axiosWithAuth()
        .get(`/prices`)
        .then(res => console.log('GETPRICE: RES: ', res))
        .catch(err => dispatch({ type: GET_PRICE_FAIL, payload: err }));
}

// saved properties
export const GET_FAVORITES_START = 'GET_FAVORITES_START';
export const GET_FAVORITES_SUCCESS = 'GET_FAVORITES_SUCCESS';
export const GET_FAVORITES_FAIL = 'GET_FAVORITES_FAIL'; 

export const getFavorites = () => dispatch => {
    dispatch({ type: GET_FAVORITES_START });
    axiosWithAuth()
        .get(`/users/:id/favories`)
        .then(res => console.log('GETFAVORITE: RES: ', res))
        .catch(err => dispatch({ type: GET_PRICE_FAIL, payload: err }));
}