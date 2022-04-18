import Modals from '../components/Modals';
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
    }
}
export default connect(mapReduxStateToReactProps, mapDispatchToProps)(Modals);