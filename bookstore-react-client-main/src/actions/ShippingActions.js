import axios from "axios"
import urls from '../utils/APIConfig'
import types from '../utils/ActionTypes'

const { ADD_USHIPPING_URL, GET_USER_SHIPPINGS_URL, USER_SHIPPING_DETAIL_URL, UPDATE_USER_SHIPPING_URL, DELETE_USER_SHIPPING_URL, GET_DEFAULT_USER_SHIPPING_URL, SET_DEFAULT_USER_SHIPPING_URL } = urls
const { NEW_USER_SHIPPING, GET_USER_SHIPPINGS, GET_SHIPPING_INFO, UPDATE_USER_SHIPPING, DELETE_USER_SHIPPING_ADDRESS, GET_DEFAULT_USER_SHIPPING } = types

export const addUserShipping = (shipping, history) => dispatch => {
    axios.post(ADD_USHIPPING_URL, shipping, { headers: { 'dataType': "json", 'Content-Type': 'application/json', } })
        .then(result => {
            history.push('/ShippingList')
        })
        .catch(reason => {

        })
}

export const getUserShipping = () => dispatch => {
    axios.get(GET_USER_SHIPPINGS_URL)
        .then(result => {
            dispatch({
                type: GET_USER_SHIPPINGS,
                payload: result.data
            })
        })
        .catch(reason => {

        })
}

export const getUserShippingInfo = (id) => dispatch => {
    axios.get(USER_SHIPPING_DETAIL_URL + id)
        .then(result => {
            dispatch({
                type: GET_SHIPPING_INFO,
                payload: result.data
            })
        })
        .catch(reason => {

        })
}

export const updateUserShippingInfo = (shipping, history) => dispatch => {
    axios.post(UPDATE_USER_SHIPPING_URL, shipping, { headers: { 'dataType': "json", 'Content-Type': 'application/json', } })
        .then(result => {
            history.push('/ShippingList')
        })
        .catch(reason => {

        })
}

export const deleteUserShipping = (id) => dispatch => {
    axios.delete(DELETE_USER_SHIPPING_URL + id)
        .then(result => {
            dispatch({
                type: DELETE_USER_SHIPPING_ADDRESS,
                payload: id
            })
        })
        .catch(reason => {

        })
}

export const getDefaultUserShipping = () => dispatch => {
    axios.get(GET_DEFAULT_USER_SHIPPING_URL)
        .then(result => {
            dispatch({
                type: GET_DEFAULT_USER_SHIPPING,
                payload: result.data
            })
        })
        .catch(reason => {

        })
}

export const setDefaultUserShipping = (id) => dispatch => {
    axios.get(SET_DEFAULT_USER_SHIPPING_URL + id)
        .then(result => {

        })
        .catch(reason => {

        })
}
