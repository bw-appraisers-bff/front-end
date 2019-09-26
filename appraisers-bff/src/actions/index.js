import { axiosWithAuth } from "../utils/axiosWithAuth.js";
import axios from "axios";
import decode from "jwt-decode";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_DECODE = "LOGIN_DECODE";
export const LOGIN_FAIL = "LOGIN_FAIL";

//posting to BE api for token
export const login = (creds, history) => dispatch => {
  console.log("LOGIN: HISTORY: ", history);
  dispatch({ type: LOGIN_START });
  axios
    .post(`https://appraisersbff.herokuapp.com/auth/login`, creds)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
      localStorage.setItem("token", res.data.token);
      console.log("decodedToken: ", decode(res.data.token));
      dispatch({ type: LOGIN_DECODE, payload: decode(res.data.token) });
      history.push("/appraise");
    })
    .catch(err => dispatch({ type: LOGIN_FAIL, payload: err }));
};

//creating a user from BE api
export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

export const signUp = user => dispatch => {
  dispatch({ type: SIGNUP_START });
  axios
    .post(`https://appraisersbff.herokuapp.com/auth/register`, user)
    .then(res => dispatch({ type: SIGNUP_SUCCESS }))
    .catch(err => dispatch({ type: SIGNUP_FAIL, payload: err }));
};

export const GET_HOUSE_START = "GET_HOUSE_START";
export const GET_HOUSE_SUCCESS = "GET_HOUSE_SUCCESS";
export const GET_HOUSE_FAIL = "GET_HOUSE_FAIL";

export const getHouse = () => dispatch => {
  dispatch({ type: GET_HOUSE_START });
  axiosWithAuth()
    .get(`/houses`)
    .then(res => console.log("GETHOUSE RES: ", res.data))
    .catch(err => dispatch({ type: GET_HOUSE_FAIL, payload: err }));
};

//sends information to BE -> DS to be put into algo
export const POST_HOUSE_START = "POST_HOUSE_START";
export const POST_HOUSE_SUCCESS = "POST_HOUSE_SUCCESS";
export const POST_HOUSE_FAIL = "POST_HOUSE_FAIL";
//price from here.
export const postHouse = (aHouse, history) => dispatch => {
  console.log("HOUSE IN ACTIONS: ", aHouse);
  console.log("HISTORY IN ACTIONS: ", history);
  dispatch({ type: POST_HOUSE_START });
  axiosWithAuth()
    .post(`/houses`, aHouse)
    .then(res => {
      console.log("POSTHOUSE RES: ", res.data);
      dispatch({ type: POST_HOUSE_SUCCESS, payload: res.data });
      history.push("/result", res.data);
    })
    .catch(err => {
      console.log("I'm an error for postHouse", err);
      // dispatch({ type: POST_HOUSE_FAIL, payload:err })
    });
};

// saved properties
export const GET_FAVORITES_START = "GET_FAVORITES_START";
export const GET_FAVORITES_SUCCESS = "GET_FAVORITES_SUCCESS";
export const GET_FAVORITES_FAIL = "GET_FAVORITES_FAIL";

export const getFav = user => dispatch => {
    console.log("GET ACTION: ", user)
  dispatch({ type: GET_FAVORITES_START });
  axiosWithAuth()
    .get(`/fav`, user)
    .then(res => {
      console.log("then user: ", user);
      console.log("GETFAVORITE: RES: ", res);
    })
    .catch(err => {
      console.log("err user: ", user);
      console.log("err res: ", err.response.data);
      dispatch({ type: GET_FAVORITES_FAIL, payload: err });
    });
};

//to save property
export const POST_FAVORITES_START = "POST_FAVORITES_START";
export const POST_FAVORITES_SUCCESS = "POST_FAVORITES_SUCCESS";
export const POST_FAVORITES_FAIL = "POST_FAVORITES_FAIL";

export const postFav = loved => dispatch => {
  dispatch({ type: POST_FAVORITES_START });
  axiosWithAuth()
    .post(`/fav`, { username: "admin" })
    .then(res => {
      console.log("then loved: ", loved);
      console.log("POSTFAVORITE: RES: ", res);
    })
    .catch(err => {
      console.log("err loved: ", loved);
      console.log("err res: ", err.response.data);
      dispatch({ type: POST_FAVORITES_FAIL, payload: err });
    });
};

export const PUT_FAVORITES_START = "PUT_FAVORITES_START";
export const PUT_FAVORITES_SUCCESS = "PUT_FAVORITES_SUCCESS";
export const PUT_FAVORITES_FAIL = "PUT_FAVORITES_FAIL";

export const putFav = (id, edited) => dispatch => {
  dispatch({ type: PUT_FAVORITES_START });
  axiosWithAuth()
    .put(`/fav/${id}`, edited)
    .then(res => {
      console.log("then edited: ", edited);
      console.log("PUTFAVORITE: RES: ", res);
    })
    .catch(err => {
      console.log("err edited: ", edited);
      console.log("err res: ", err.response.data);
      dispatch({ type: PUT_FAVORITES_FAIL, payload: err });
    });
};

export const DELETE_FAVORITES_START = "DELETE_FAVORITES_START";
export const DELETE_FAVORITES_SUCCESS = "DELETE_FAVORITES_SUCCESS";
export const DELETE_FAVORITES_FAIL = "DELETE_FAVORITES_FAIL";

export const deleteFav = (id) => dispatch => {
  dispatch({ type: DELETE_FAVORITES_START });
  axiosWithAuth()
    .delete(`/fav/${id}`)
    .then(res => console.log("DELETEFAVORITE: RES: ", res))
    .catch(err => {
      console.log("err res: ", err.response.data);
      dispatch({ type: DELETE_FAVORITES_FAIL, payload: err });
    });
};