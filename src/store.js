import {createStore} from 'redux';

export default createStore(function(state, action){
    //console.log(state, action)
    if(state === undefined){
        return {
            serverData: {"busynessLevel":2,"calendar":"","currentStressLevel":4,"date":"05/12/22","diastolicBP":79,"heartRate":78,"id":4,"location":"home","previousStressLevel":4,"sleepHours":3,"systolicBP":132,"time":"8:00","treatment":{"id":9,"summary":"Try giving a call to someone for support","title":"Give your Therapist or Close Friend/Family a Call","url":"img/contact.jpg"},"treatmentExists":"yes"},
            isStressUp: false,
            isPopUp: false,
            isRecommend: false,
            isReport: false,
            placeholder: "Write memo",
            reports: [{id:1, title:"My heartbeat suddenly increased without reasons today."}],
            timer: 0,
            isRecommendLists: false,
            treatments:
            [{id:1, header:"Breathing exercise", title:"Deep breathing exercise", img:"deep_breathing_exercise.gif"},
             {id:2, header:"Meditation", title:"Meditation", img:"meditation.jpg"},
             {id:3, header:"Work out", title:"Work out", img:"workout.jpg"},
             {id:4, header:"Take a walk", title:"Take a walk", img:"take_a_walk.jpg"},
             {id:5, header:"Meditation", title:"Mindfulness meditation", img:"mindfulness_meditation.jpg"},
             {id:6, header:"Cancel plans", title:"Cancel plans", img:"cancel_plans.jpg"},
             {id:7, header:"Sleep", title:"Cancel plans and get some sleep", img:"cancel_plans_and_get_some_sleep.jpg"},
             {id:8, header:"Listen to music", title:"Relaxation to music", img:"relaxation_to_music.jpg"},
             {id:9, header:"Contact people", title:"Contact therapist or close friends/family", img:"contact.jpg"}]
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