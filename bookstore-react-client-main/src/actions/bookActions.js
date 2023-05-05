import axios from 'axios'
import urls from '../utils/APIConfig'
import types from '../utils/ActionTypes'

const { CREATE_BOOK_URL, GET_BOOKS_URL, DELETE_BOOK_URL, BOOK_DETAIL_URL } = urls
const { GET_BOOK_LIST, DELETE_BOOK, GET_BOOK_DETAIL, GET_ERRORS } = types

export const createNewBook = (book, history) => dispatch => {
    axios.post(CREATE_BOOK_URL, book)
        .then(result => {
            history.push('/booklist')
        })
        .catch(reason => {

        })
}

export const getAllBook = () => dispatch => {
    axios.get(GET_BOOKS_URL)
        .then(result => {
            dispatch({
                type: GET_BOOK_LIST,
                payload: result.data
            })
        })
        .catch(reason => {

        })
}

export const getBookDetail = (id) => dispatch => {
    axios.get(BOOK_DETAIL_URL + id)
        .then(result => {
            dispatch({
                type: GET_BOOK_DETAIL,
                payload: result.data
            })
        })
        .catch(reason => {
            dispatch({
                type: GET_ERRORS,
                payload: { 'getBookDetail': reason.response.data.message }
            })
        })
}

export const deleteBook = (id) => dispatch => {
    axios.delete(DELETE_BOOK_URL + id)
        .then(result => {
            dispatch({
                type: DELETE_BOOK,
                payload: id
            })
        })
        .catch(reason => {
            dispatch({
                type: GET_ERRORS,
                payload: { 'deleteBook': reason.response.data.message }
            })
        })
}