//would like to use a combineReducer but I'm going to start out with a large file will refactor

const initialState = {
    user = {
        id: '',
        username: '',
        password: '',
        name: ''
    },
    favorite = {
        userId = '',
        houseId = '',
        nameEntry = '',
        interestLevel = ''
    },
    house = {
        id = '',
        name = '',
        description = '',
        streetAddress = '',
        city = '',
        state = '',
        zipcode = '',
        yearBuilt = '',
        sqFoot = '',
        bathrooms = '',
        bedrooms = ''
    },
    price = {
        id = '',
        houseId = '',
        priceBase = '',
        priceMargin = '',
        confidenceInterval = ''
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
