import { combineReducers } from 'redux';
import PhoneReducer from '../PhoneReducer'

export default combineReducers({
    phones: PhoneReducer
})