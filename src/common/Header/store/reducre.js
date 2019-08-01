import * as actionType from './actionType'
import {fromJS} from 'immutable'

const defaultState = fromJS({
    NavList:[]
})


export default (state = defaultState , action) =>{
    switch(action.type){
        case actionType.HEADER_GETNAV:
            return state.set('NavList',fromJS(action.data))
        case actionType.HEADER_NOMOUSEENTER:
            return state.set('NavList',fromJS(action.list))
        case actionType.HEADER_ONMOUSELEAVER:
            return state.set('NavList',fromJS(action.list))
        default:
            return state
    }
}
