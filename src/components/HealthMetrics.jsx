import React, {Component} from 'react';
export default class HealthMetrics extends Component {
    state = {
        serverData:this.props.serverData
    }
    render(){
        return (
            <div className='c-100 t-16 t-med'>
                <div className='flex border-bottom'>
                    <div className='padding-sm'>
                        Heartbeat rate
                        <div className='l-apple-box-multiple'></div>
                    </div>
                    <div className="t-bold t-20 right-0 padding-sm absolute">
                       {this.props.serverData.heartRate}/min
                    </div>
                </div>
                <div className='flex border-bottom'>
                    <div className='padding-sm'>
                        Blood pressure
                        <div className='l-apple-box-multiple'></div>
                    </div>
                    <div className="t-bold t-20 right-0 padding-sm absolute">
                    {this.props.serverData.systolicBP}/{this.props.serverData.diastolicBP}
                    </div>
                </div>
                <div className='flex border-bottom'>
                    <div className='padding-sm'>
                        Sleep hours
                        <div className='l-apple-box-multiple'></div>
                    </div>
                    <div className="t-bold t-20 right-0 padding-sm absolute">
                    {this.props.serverData.sleepHours}hrs
                    </div>
                </div>
            </div>
        )
    }
}