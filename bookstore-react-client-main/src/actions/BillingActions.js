import axios from 'axios'
import urls from '../utils/APIConfig'
import types from '../utils/ActionTypes'

const { ADD_CARD_URL, CARD_LIST_URL, DELETE_CARD_URL, CARD_DETAIL_URL, UPDATE_CARD_URL, GET_DEFAULT_CARD_URL, SET_DEFAULT_CARD_URL } = urls
const { NewCardAndUserBilling, GET_CREDIT_CARD_LIST, DELETE_CARD, GET_CARD_DETAIL, GET_DEFAULT_CARD } = types

export const newCard = (data, history) => dispatch => {
    axios.post(ADD_CARD_URL, data)
        .then(result => {
            history.push('/cardlist')
        })
        .catch(reason => {

        })
}

export const cardList = () => dispatch => {

    axios.get(CARD_LIST_URL)
        .then(result => {
            dispatch({
                type: GET_CREDIT_CARD_LIST,
                payload: result.data
            })
        })
        .catch(reason => {

        })
}

export const deletCard = (cardID) => dispatch => {
    axios.delete(DELETE_CARD_URL + cardID)
        .then(result => {
            dispatch({
                type: DELETE_CARD,
                payload: cardID
            })
        })
        .catch(reason => {

        })
}

export const getCard = (cardId) => dispatch => {
    axios.get(CARD_DETAIL_URL + cardId)
        .then(result => {
            dispatch({
                type: GET_CARD_DETAIL,
                payload: result.data
            })
        })
        .catch(reason => {

        })
}

export const updateCard = (card, history) => dispatch => {
    axios.post(UPDATE_CARD_URL, card, { headers: { 'dataType': "json", 'Content-Type': 'application/json', } })
        .then(result => {
            history.push('/cardlist')
        })
        .catch(reason => {
        })
}

export const getDefaultCard = () => dispatch => {
    axios.get(GET_DEFAULT_CARD_URL)
        .then(result => {
            dispatch({
                type: GET_DEFAULT_CARD,
                payload: result.data
            })
        })
        .catch(reason => {

        })
}

export const setDefaultCard = (id) => dispatch => {
    axios.get(SET_DEFAULT_CARD_URL + id)
        .then(result => {

        })
        .catch(reason => {

        })
}