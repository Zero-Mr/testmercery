import {combineReducers} from 'redux-immutable'
import {reducre as HeaderReducre} from '../common/Header/store'


const reducer= combineReducers({
    header:HeaderReducre
})
export default reducer;