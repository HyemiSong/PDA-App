import HealthMetrics from '../components/HealthMetrics';
import {connect} from 'react-redux';
function mapReduxStateToReactProps(state){
    return {
        serverData: state.serverData
    }
}
export default connect(mapReduxStateToReactProps)(HealthMetrics);