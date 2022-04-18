import TopLeft from '../components/TopLeft';
import {connect} from 'react-redux';
function mapReduxStateToReactProps(state){
    return {
        // number:state.number
    }
}
export default connect(mapReduxStateToReactProps)(TopLeft);