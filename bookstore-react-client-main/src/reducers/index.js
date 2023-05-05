import { combineReducers } from 'redux'
import errorReducer from './errorReducer'
import securityReducer from './securityReducer'
import bookReducer from './bookReducer'
import billingReducer from './billingReducer'
import shippingReducer from './shippingReducer'
import shoppingCartReducer from './shoppingCartReducer'
import ordersReducer from './ordersReducer'

export default combineReducers({
    error: errorReducer,
    security: securityReducer,
    books: bookReducer,
    cards: billingReducer,
    userShippings: shippingReducer,
    shoppingCart: shoppingCartReducer,
    orders: ordersReducer
})