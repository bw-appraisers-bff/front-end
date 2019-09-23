const initialState = {
    login: {
        isLoggedIn: false,
        isLogginIn: false,
        error: '',
        username: '',
        password: '',
        name: ''
    }
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}