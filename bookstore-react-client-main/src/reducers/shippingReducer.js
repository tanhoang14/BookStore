import types from '../utils/ActionTypes'

const { GET_USER_SHIPPINGS, GET_SHIPPING_INFO, DELETE_USER_SHIPPING_ADDRESS, GET_DEFAULT_USER_SHIPPING } = types

const initialState = {
    userShippings: {},
    shippingInfo: {},
    defaultShipping: {}
}

const shippingReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_SHIPPINGS:
            return {
                ...state,
                userShippings: action.payload.userShippingList,
                defaultShipping: action.payload.defaultUserShipping
            }
        case GET_SHIPPING_INFO:
            return {
                ...state,
                shippingInfo: action.payload
            }

        case DELETE_USER_SHIPPING_ADDRESS:
            const newList = state.userShippings.filter(address => {
                return address.id !== action.payload
            })

            return {
                ...state,
                userShippings: newList
            }

        case GET_DEFAULT_USER_SHIPPING:
            return {
                ...state,
                defaultShipping: action.payload
            }
        default:
            return state;
    }
}

export default shippingReducer;