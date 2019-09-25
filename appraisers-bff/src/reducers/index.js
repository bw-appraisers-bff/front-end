//would like to use a combineReducer but I'm going to start out with a large file will refactor

import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  POST_HOUSE_START,
  POST_HOUSE_SUCCESS,
  POST_HOUSE_FAIL,
  GET_PRICE_START,
  GET_PRICE_SUCCESS,
  GET_PRICE_FAIL,
  GET_FAVORITES_START,
  GET_FAVORITES_SUCCESS,
  GET_FAVORITES_FAIL
} from "../actions";

//make auth state for conditional rendering on nav bar

const initialState = {
  login: {
    isLoggingIn: false,
    isLoggedIn: false,
    error: ""
  },
  user: {
    // id: '',
    username: "",
    password: ""
    // name: ''
  },
  favorite: {
    userId: "",
    houseId: "",
    nameEntry: "",
    interestLevel: ""
  },
  house: {
    id: null,
    zipCode: null,
    yearBuilt: null,
    squareFootage: null,
    bedrooms: null,
    bathrooms: null
  }, // maybe we could parse the strings?
  price: {
    id: "",
    houseId: "",
    priceBase: "",
    priceMargin: "",
    confidenceInterval: ""
  }
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
        ...state,
      };
    case SIGNUP_FAIL:
      return {
        ...state
      };

    case POST_HOUSE_START:
      return {
        ...state
      };
    case POST_HOUSE_FAIL:
      return {
        ...state
      };

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
