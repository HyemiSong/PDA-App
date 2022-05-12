import Timer from '../components/Timer';
import {connect} from 'react-redux';
function mapReduxStateToReactProps(state){
    return {
        isPopUp: state.isPopUp,
        timer: state.timer,
        serverData: state.serverData
    }
}
function mapDispatchToProps(dispatch){
    return{
        onCounter:function(e){
            dispatch({type:'TIMER', onCount:e})
        },
        onClosePop:function(e){
            dispatch({type:'POPUP', onClosePop:e})
        },
        // onServerData:function(e){
        //     dispatch({type:'SERVERDATA', onServerData:e})
        // }
    }
}
export default connect(mapReduxStateToReactProps, mapDispatchToProps)(Timer);