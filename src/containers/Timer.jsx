import Timer from '../components/Timer';
import {connect} from 'react-redux';
function mapReduxStateToReactProps(state){
    return {
        isPopUp: state.isPopUp,
        timer: state.timer
    }
}
function mapDispatchToProps(dispatch){
    return{
        onCounter:function(e){
            dispatch({type:'TIMER', onCount:e})
        },
        onClosePop:function(e){
            dispatch({type:'POPUP', onClosePop:e})
        }
    }
}
export default connect(mapReduxStateToReactProps, mapDispatchToProps)(Timer);