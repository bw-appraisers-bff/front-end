//  /api/house
// /api/houses/:id

const initialState = {
    id = null,
    name = '',
    description = '',
    streetAddress = '',
    city = '',
    state = '',
    zipcode = '',
    yearBuilt = '',
    sqFootage = '',
    bathrooms = '',
    bedrooms = ''
}

export const houseReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}