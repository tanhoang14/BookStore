import types from '../utils/ActionTypes'

const { GET_CREDIT_CARD_LIST, DELETE_CARD, GET_CARD_DETAIL, GET_DEFAULT_CARD } = types

const defaultState = {
    cards: {},
    cardInfo: {},
    defaultCard: {}
}

const billingReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_CREDIT_CARD_LIST:
            return {
                ...state,
                cards: action.payload.userPayments,
                defaultCard: action.payload.defaultPayment
            }
        case DELETE_CARD:
            const newCardList = state.cards.filter(card => {
                return card.id !== action.payload
            })
            return {
                ...state,
                cards: newCardList
            }

        case GET_CARD_DETAIL:
            return {
                ...state,
                cardInfo: action.payload
            }

        case GET_DEFAULT_CARD:
            return {
                ...state,
                defaultCard: action.payload
            }

        default:
            return state;
    }
}

export default billingReducer