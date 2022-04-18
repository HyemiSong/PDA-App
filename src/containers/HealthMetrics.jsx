import HealthMetrics from '../components/HealthMetrics';
import {connect} from 'react-redux';
function mapReduxStateToReactProps(state){
    return {
        // number:state.number
    }
}
export default connect(mapReduxStateToReactProps)(HealthMetrics);