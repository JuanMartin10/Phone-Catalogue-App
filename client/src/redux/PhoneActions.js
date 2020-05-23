import { GET_PHONES, GET_PHONES_SUCCESS, GET_PHONES_ERROR } from './PhoneTypes'

import axios from "axios"

export const getDataPhones = () => {
    return async (dispatch) => {
        dispatch(getPhones())

        try {
            const response = await axios.get('http://localhost:4000/phones')
            dispatch(getPhonesDone(response.data))
        } catch (error) {
            dispatch(getPhonesError())
        }
    }
}
const getPhones = () => ({
    type: GET_PHONES,
    payload: true
})

const getPhonesDone = phones => ({
    type: GET_PHONES_SUCCESS,
    payload: phones
})

const getPhonesError = () => ({
    type: GET_PHONES_ERROR,
    payload: true
})

