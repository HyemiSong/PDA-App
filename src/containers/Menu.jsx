import Menu from '../components/Menu';
import {connect} from 'react-redux';
function mapReduxStateToReactProps(state){
    return {
        isPopUp: state.isPopUp,
        isRecommend: state.isRecommend,
        isReport: state.isReport,
        isRecommendLists: state.isRecommendLists
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
        onOpenRecLists:function(e){
            dispatch({type:'RECOMMENDLISTS', onOpenRecLists:e})
        }
    }
}
export default connect(mapReduxStateToReactProps, mapDispatchToProps)(Menu);