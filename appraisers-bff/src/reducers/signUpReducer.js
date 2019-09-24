const initialState = {
    signUp: {
        isSigningUp: false,
        isSignedUp: false,
        error: '',
        id: null,
        username: '',
        password: '',
        name: '',
    }
}

export const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}