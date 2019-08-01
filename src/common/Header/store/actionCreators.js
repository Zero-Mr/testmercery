import * as actionType from './actionType';
import {fromJS} from 'immutable';
import axios from 'axios'

const getNavdata = (result) =>({
    type:actionType.HEADER_GETNAV,
    data:fromJS(result)
})

const noMouseNav = (list,index) =>({
    type:actionType.HEADER_NOMOUSEENTER,
    list:list,
    index
}) 

const onnavLeaver = (list,index) =>({
    type:actionType.HEADER_ONMOUSELEAVER,
    list,
    index
})

export const GetNavdataAction =()=>{
    return(dispatch) =>{
        axios.get('api/navlist.json').then((res)=>{
            const result=res.data.data;
            dispatch(getNavdata(result))
        }).catch((error)=>{
            console.log(error)
        })
    }
}

export const noMouseNavAction= (list,index)=>{
    return(dispatch) =>{
        dispatch(noMouseNav(list,index))
    }
}

export const onMouseNavLeaver = (list,index)=>{
    return(dispatch) =>{
        dispatch(onnavLeaver(list,index))
    }
}