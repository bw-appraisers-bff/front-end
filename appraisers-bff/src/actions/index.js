import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth.js';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const login = () => dispatch => {
    dispatch({ type: LOGIN_START });
    axiosWithAuth
        .post(`/auth/login`)
        .then(res => console.log("LOGIN RES: ", res))
        .catch(err => dispatch({ type: LOGIN_FAIL, payload: err}))
}

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';

export const signUp = () => dispatch => {
    dispatch({ type: SIGNUP_START });
    axiosWithAuth
        .post(`/auth/login`)
        .then(res => console.log("SIGNUP RES: ", res))
        .catch(err => dispatch({ type: SIGNUP_FAIL, payload: err }));
}

export const POST_HOUSE_START = 'POST_HOUSE_START';
export const POST_HOUSE_SUCCESS = 'POST_HOUSE_SUCCESS';
export const POST_HOUSE_FAIL = 'POST_HOUSE_FAIL';

export const postHouse = () => dispatch => {
    dispatch({ type: LOGIN_START });
    axiosWithAuth
        .post(`/houses`)
        .then(res => console.log("POSTHOUSE RES: ", res))
        .catch(err => dispatch({ type: POST_HOUSE_FAIL, payload:err }));
}