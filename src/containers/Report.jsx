import Report from '../components/Report';
import {connect} from 'react-redux';
function mapReduxStateToReactProps(state){
    return {
        isPopUp: state.isPopUp,
        isRecommend: state.isRecommend,
        isReport: state.isReport,
        placeholder: state.placeholder,
        reports: state.reports
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
        },
        onSubmitReport:function(e){
            dispatch({type:'SUBMITREPORT', onSubmitRep:e})
        }
    }
}
export default connect(mapReduxStateToReactProps, mapDispatchToProps)(Report);