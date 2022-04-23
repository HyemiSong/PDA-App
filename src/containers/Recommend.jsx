import Recommend from '../components/Recommend';
import {connect} from 'react-redux';
function mapReduxStateToReactProps(state){
    return {
        isRecommendLists: state.isRecommendLists
    }
}
function mapDispatchToProps(dispatch){
    return{
        onOpenRecLists:function(e){
            dispatch({type:'RECOMMENDLISTS', onOpenRecLists:e})
        }
    }
}
export default connect(mapReduxStateToReactProps, mapDispatchToProps)(Recommend);

