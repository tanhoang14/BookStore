import types from '../utils/ActionTypes'

const { GET_ORDERS } = types

const defaultState = {
    orders: {}
}

const ordersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_ORDERS:
            return {
                ...state,
                orders: action.payload
            }

        default:
            return state;
    }
}

export default ordersReducer