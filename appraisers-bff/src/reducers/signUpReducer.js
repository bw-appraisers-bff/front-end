const initialState = {
    signUp: {
        isSigningUp: false,
        isSignedUp: false,
        error: ''
    }
}

export const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}