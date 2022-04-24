import BreathingEx from '../components/BreathingEx';
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
        onOpenRec:function(e){
            dispatch({type:'RECOMMEND', onOpenRec:e})
        }
    }
}
export default connect(mapReduxStateToReactProps, mapDispatchToProps)(BreathingEx);