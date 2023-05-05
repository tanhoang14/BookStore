import axios from 'axios'
import urls from '../utils/APIConfig'
import types from '../utils/ActionTypes'

const { Add_BOOK_TO_CART_ITEM_URL, GET_SHOPPING_CART_ITEMS_URL, DELETE_ITEM_URL } = urls
const { Add_BOOK_TO_CART_ITEM, GET_SHOPPING_CART_ITEMS, DELETE_ITEM } = types

export const addBookToCartItem = (data, history) => dispatch => {
    axios.post(Add_BOOK_TO_CART_ITEM_URL, data)
        .then(result => {
            history.push('/shoppingCart')
        })
        .catch(reason => {

        })
}

export const getShoppingCart = () => dispatch => {
    axios.get(GET_SHOPPING_CART_ITEMS_URL)
        .then(result => {
            dispatch({
                type: GET_SHOPPING_CART_ITEMS,
                payload: result.data
            })
        }).catch(reason => {

        })
}

export const removeItem = (id) => dispatch => {
    axios.delete(DELETE_ITEM_URL + id)
        .then(result => {
            dispatch({
                type: DELETE_ITEM,
                payload: id
            })
        })
        .catch(reason => {

        })
}