import {createStore} from 'redux';

export default createStore(function(state, action){
    console.log(state, action)
    if(state === undefined){
        return {
            isPopUp:true,
            isRecommend:false,
            isReport:false,
            placeholder:"Write memo"
        }
    }
    if(action.type === 'POPUP'){
        return {...state, isPopUp:action.onClosePop}
    }
    if(action.type === 'RECOMMEND'){
        return {...state, isRecommend:action.onOpenRec}
    }
    if(action.type === 'REPORT'){
        return {...state, isReport:action.onOpenRep}
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())