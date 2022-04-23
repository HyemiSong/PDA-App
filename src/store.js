import {createStore} from 'redux';

export default createStore(function(state, action){
    console.log(state, action)
    if(state === undefined){
        return {
            isPopUp:false,
            isRecommend:false,
            isReport:false,
            placeholder:"Write memo",
            reports:[{id:1, title:"My heartbeat suddenly increased without reasons today."}],
            timer: 0,
            isRecommendLists:false,
            recommendAll:[{id:1, title:"breathing"},{id:1, title:"going out"}]
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
    if(action.type === 'SUBMITREPORT'){
        return {...state, reports:action.onSubmitRep}
    }
    if(action.type === 'TIMER'){
        return {...state, timer:action.onCount}
    }
    if(action.type === 'RECOMMENDLISTS'){
        return {...state, isRecommendLists:action.onOpenRecLists}
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())