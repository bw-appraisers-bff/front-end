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
    GET_FAVORITES_FAIL,
} from '../actions';

const initialState = {
    user: {
        id: '',
        username: '',
        password: '',
        name: ''
    },
    favorite: {
        userId: '',
        houseId: '',
        nameEntry: '',
        interestLevel: ''
    },
    house: {
        id: '',
        name: '',
        description: '',
        streetAddress: '',
        city: '',
        state: '',
        zipcode: '',
        yearBuilt: '',
        sqFoot: '',
        bathrooms: '',
        bedrooms: ''
    },
    price: {
        id: '',
        houseId: '',
        priceBase: '',
        priceMargin: '',
        confidenceInterval: ''
    }
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        

        default:
            return state;
    }
}


// import { combineReducers } from 'redux';
// import { loginReducer } from './loginReducer.js';
// import { signUpReducer } from './signUpReducer.js';

// export default combineReducers({
//     login: loginReducer,
//     signUp: signUpReducer,
// })
