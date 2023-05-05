import types from '../utils/ActionTypes'

const { GET_BOOK_LIST, DELETE_BOOK, GET_BOOK_DETAIL } = types

const defaultState = {
    books: {},
    detail: {}
}

const bookReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_BOOK_LIST:
            return {
                ...state,
                books: action.payload
            }

        case GET_BOOK_DETAIL:
            return {
                ...state,
                detail: action.payload
            }

        case DELETE_BOOK:
            const newBookList = state.books.filter(book => {
                return book.id !== action.payload
            })
            return {
                ...state,
                books: newBookList
            }

        default:
            return state;
    }

}

export default bookReducer;