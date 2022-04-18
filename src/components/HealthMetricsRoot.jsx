import React, {Component} from "react";
import HealthMetrics from "../containers/HealthMetrics"

export default class HealthMetricsRoot extends Component{
    render(){
        return(
            <div>
                <HealthMetrics></HealthMetrics>
            </div>
        )
    }
}