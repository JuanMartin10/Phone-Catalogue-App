import {
    GET_PHONES,
    GET_PHONES_SUCCESS,
    GET_PHONES_ERROR,
} from './PhoneTypes'


const initialState = {
    phones: [],
    error: null,
    loading: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PHONES:
            return {
                ...state,
                loading: action.payload
            }
        case GET_PHONES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                phones: action.payload
            }
        case GET_PHONES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state
    }
}

