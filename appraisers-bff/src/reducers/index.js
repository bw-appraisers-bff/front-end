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
  GET_PRICE_START,
  GET_PRICE_SUCCESS,
  GET_PRICE_FAIL,
  GET_FAVORITES_START,
  GET_FAVORITES_SUCCESS,
  GET_FAVORITES_FAIL,
  GET_HOUSE_START,
  GET_HOUSE_SUCCESS
} from "../actions";

//make auth state for conditional rendering on nav bar

const initialState = {
  login: {
    isLoggingIn: false,
    isLoggedIn: false,
    error: ""
  },
  decodedToken: {
    username: ''
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
    priceOfHouse: {}
  },
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
          username: action.payload.username
        }
      }
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
      }
      case POST_HOUSE_SUCCESS:
          return {
            ...state,
            house: {
              // id: action.payload.id,
              // zipCode: action.payload.zipCode,
              // yearBuilt: action.payload.yearBuilt,
              // squareFootage: action.payload.squareFootage,
              // bedrooms: action.payload.bedrooms,
              // bathrooms: action.payload.bathrooms,
              // price: action.payload.price,
              priceOfHouse: action.payload

            }
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
