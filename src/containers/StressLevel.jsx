import StressLevel from '../components/StressLevel';
import {connect} from 'react-redux';
function mapReduxStateToReactProps(state){
    return {
        // number:state.number
    }
}
export default connect(mapReduxStateToReactProps)(StressLevel);