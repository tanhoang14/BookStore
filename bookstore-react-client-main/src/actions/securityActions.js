import axios from "axios"
import urls from '../utils/APIConfig'
import types from '../utils/ActionTypes'
import setJwt from '../utils/security/setJwt'
import jwt_decode from 'jwt-decode'

const { SIGNUP_URL, LOGIN_URL } = urls
const { GET_ERRORS, SET_CURRENT_USER } = types


export const createNewUser = (newUser, history) => dispatch => {
    axios.post(SIGNUP_URL, newUser)
        .then(result => {
            dispatch({
                type: GET_ERRORS,
                payload: {}
            })
            history.push("/login");
        })
        .catch(reason => {
            // dispatch({
            //     type: GET_ERRORS,
            //     payload: reason.response.data
            // })
        })
}

export const login = (loginData) => dispatch => {
    axios.post(LOGIN_URL, loginData)
        .then(result => {
            const { token } = result.data
            localStorage.setItem('jwtToken', token)
            setJwt(token)
            const decode = jwt_decode(token)
            dispatch({
                type: SET_CURRENT_USER,
                payload: decode
            })
        })
        .catch(reason => {
            dispatch({
                type: GET_ERRORS,
                payload: reason.response.data
            })
        })
}

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken')
    setJwt(false)
    dispatch({
        type: SET_CURRENT_USER,
        payload: {}
    })
}