import {createStore} from 'redux';

export default createStore(function(state, action){
    console.log(state, action)
    if(state === undefined){
        return {
            serverData: [{"calendar":"meeting","currentStressLevel":0,"heartRate":0,"id":0,"location":"work","previousStressLevel":0,"sleepHours":0,"treatment":{"summary":"summary","title":"title","url":"https://media.wired.com/photos/5b8999943667562d3024c321/master/w_120,c_limit/trash2-01.jpg"}}],
            isStressUp: false,
            isPopUp: false,
            isRecommend: false,
            isReport: false,
            placeholder: "Write memo",
            reports: [{id:1, title:"My heartbeat suddenly increased without reasons today."}],
            timer: 0,
            isRecommendLists: false,
            treatments:
            [{id:1, title:"15mins breathing exercise"},
             {id:2, title:"Going out for a walk"},
             {id:3, title:"Canceling meetings until tommorrow"},
             {id:4, title:"Attending an online Yoga class"},
             {id:5, title:"Dringing favorite tea"},
             {id:6, title:"Singing a favorite song"},
             {id:7, title:"Going to a gym"}]
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
    if(action.type === 'SERVERDATA'){
        return {...state, serverData:action.onServerData}
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())