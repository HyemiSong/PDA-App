import PopUp from '../components/PopUp';
import {connect} from 'react-redux';
function mapReduxStateToReactProps(state){
    return {
        isPopUp: state.isPopUp,
        isRecommend: state.isRecommend
    }
}
function mapDispatchToProps(dispatch){
    return{
        onClosePop:function(e){
            dispatch({type:'POPUP', onClosePop:e})
        },
        onOpenRec:function(e){
            dispatch({type:'RECOMMEND', onOpenRec:e})
        }
    }
}
export default connect(mapReduxStateToReactProps, mapDispatchToProps)(PopUp);