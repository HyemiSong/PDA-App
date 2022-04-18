import TopRight from '../components/TopRight';
import {connect} from 'react-redux';
function mapReduxStateToReactProps(state){
    return {
        // number:state.number
    }
}
export default connect(mapReduxStateToReactProps)(TopRight);