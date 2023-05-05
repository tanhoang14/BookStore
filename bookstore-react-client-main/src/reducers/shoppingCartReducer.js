import types from '../utils/ActionTypes'

const { GET_SHOPPING_CART_ITEMS, DELETE_ITEM } = types

const defaultState = {
    shoppingCart: []
}

const shoppingCartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_SHOPPING_CART_ITEMS:
            return {
                ...state,
                shoppingCart: action.payload
            }

        case DELETE_ITEM:
            const newList = state.shoppingCart.filter(item => {
                return item.id !== action.payload
            })
            return {
                ...state,
                shoppingCart: newList
            }

        default:
            return state;
    }
}

export default shoppingCartReducer;