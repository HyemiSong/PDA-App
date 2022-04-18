import PDA from '../components/PDA';
import {connect} from 'react-redux';
function mapReduxStateToReactProps(state){
    return {
        isPopUp: state.isPopUp
    }
}
function mapDispatchToProps(dispatch){
    return{
    }
}
export default connect(mapReduxStateToReactProps, mapDispatchToProps)(PDA);