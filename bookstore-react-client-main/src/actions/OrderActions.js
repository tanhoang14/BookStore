import axios from 'axios'
import urls from '../utils/APIConfig'
import types from '../utils/ActionTypes'

const { CREATE_ORDER_URL, GET_ORDERS_URL } = urls
const { GET_ORDERS } = types

export const createOrder = (history) => dispatch => {
    axios.post(CREATE_ORDER_URL, {})
        .then(result => {
            history.push('/orders')
        })
        .catch(reason => {

        })
}

export const getOrders = () => dispatch => {
    axios.get(GET_ORDERS_URL)
        .then(result => {
            dispatch({
                type: GET_ORDERS,
                payload: result.data
            })
        })
        .catch(reason => {

        })
}