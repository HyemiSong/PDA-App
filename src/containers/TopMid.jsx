import TopMid from '../components/TopMid';
import {connect} from 'react-redux';
function mapReduxStateToReactProps(state){
    return {
        // number:state.number
    }
}
export default connect(mapReduxStateToReactProps)(TopMid);