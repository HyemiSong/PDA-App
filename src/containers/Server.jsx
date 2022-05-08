import Server from '../components/Server';
import {connect} from 'react-redux';
function mapReduxStateToReactProps(state){
    return {
       serverData: state.serverData
    }
}
function mapDispatchToProps(dispatch){
    return{
        onServerData:function(e){
            dispatch({type:'SERVERDATA', onServerData:e})
        }
    }
}
export default connect(mapReduxStateToReactProps, mapDispatchToProps)(Server);

