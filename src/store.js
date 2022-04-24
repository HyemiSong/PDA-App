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
            treatments:
            [{id:1, title:"15mins breathing exercise"},
             {id:2, title:"Going out for a walk"},
             {id:3, title:"Canceling meetings until tommorrow"},
             {id:4, title:"Attending an online Yoga class"},
             {id:5, title:"Dringing favorite tea"},
             {id:6, title:"Singing a favorite song"},
             {id:7, title:"Going to a gym"}
            ]
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