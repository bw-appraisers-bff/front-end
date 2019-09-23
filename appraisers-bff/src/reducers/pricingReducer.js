// /api/prices
// /api/prices/:id

const initialState = {
    id = null,
    houseId = '',
    priceBase = '',
    priceMargin = '',
    confidenceInterval = ''
    //which one of these will be given for my actual price to show? Base?
}

export const houseReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}