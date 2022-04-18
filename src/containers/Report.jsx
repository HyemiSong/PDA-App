import Report from '../components/Report';
import {connect} from 'react-redux';
function mapReduxStateToReactProps(state){
    return {
        isPopUp: state.isPopUp,
        isRecommend: state.isRecommend,
        isReport: state.isReport
    }
}
function mapDispatchToProps(dispatch){
    return{
        onClosePop:function(e){
            dispatch({type:'POPUP', onClosePop:e})
        },
        onOpenRec:function(e){
            dispatch({type:'RECOMMEND', onOpenRec:e})
        },
        onOpenRep:function(e){
            dispatch({type:'REPORT', onOpenRep:e})
        }
    }
}
export default connect(mapReduxStateToReactProps, mapDispatchToProps)(Report);