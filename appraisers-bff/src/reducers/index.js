//would like to use a combineReducer but I'm going to start out with a large file will refactor

import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_DECODE,
  LOGIN_FAIL,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  POST_HOUSE_START,
  POST_HOUSE_SUCCESS,
  POST_HOUSE_FAIL,
  GET_FAVORITES_START,
  GET_FAVORITES_SUCCESS,
  GET_FAVORITES_FAIL,
  POST_FAVORITES_START,
  POST_FAVORITES_SUCCESS,
  POST_FAVORITES_FAIL,
  PUT_FAVORITES_START,
  PUT_FAVORITES_SUCCESS,
  PUT_FAVORITES_FAIL,
  DELETE_FAVORITES_START,
  DELETE_FAVORITES_SUCCESS,
  DELETE_FAVORITES_FAIL,
} from "../actions";

//make auth state for conditional rendering on nav bar

const initialState = {
  login: {
    isLoggingIn: false,
    isLoggedIn: false,
    error: ""
  },
  decodedToken: {
    token: {},
  },
  user: {
    // id: '',
    username: "",
    password: ""
    // name: ''
  },
  favorites: [],
  house: {
    priceOfHouse: {}
  },
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        login: {
          ...state.login,
          isLoggingIn: true,
          isLoggedIn: false
        }
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          ...state.login,
          isLoggingIn: false,
          isLoggedIn: true
        }
      };
    case LOGIN_DECODE:
      return {
        ...state,
        decodedToken: {
          token: action.payload
        }
      };
    case LOGIN_FAIL:
      return {
        ...state,
        login: {
          ...state.login,
          error: action.payload
        }
      };
    case SIGNUP_START:
      return {
        ...state
      };
    case SIGNUP_SUCCESS:
      return {
        ...state
      };
    case SIGNUP_FAIL:
      return {
        ...state
      };
    case POST_HOUSE_START:
      return {
        ...state
      };
    case POST_HOUSE_SUCCESS:
      return {
        ...state,
        house: {
          priceOfHouse: action.payload
        }
      };
      case POST_FAVORITES_START:
        return {
          ...state,
        }
      case POST_FAVORITES_SUCCESS:
        return {
          ...state,
          favorites: [action.payload]
        }
      case POST_FAVORITES_FAIL:
        return {
          ...state,
          error: action.payload
        }
      case GET_FAVORITES_SUCCESS: 
      return {
        ...state,
        favorites: action.payload
      }
    default:
      return state;
  }
};

// import { combineReducers } from 'redux';
// import { loginReducer } from './loginReducer.js';
// import { signUpReducer } from './signUpReducer.js';

// export default combineReducers({
//     login: loginReducer,
//     signUp: signUpReducer,
// })
