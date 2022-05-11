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
                        75/min
                    </div>
                </div>
                <div className='flex border-bottom'>
                    <div className='padding-sm'>
                        Blood pressure
                        <div className='l-apple-box-multiple'></div>
                    </div>
                    <div className="t-bold t-20 right-0 padding-sm absolute">
                        120/80
                    </div>
                </div>
                <div className='flex border-bottom'>
                    <div className='padding-sm'>
                        Sleep hours
                        <div className='l-apple-box-multiple'></div>
                    </div>
                    <div className="t-bold t-20 right-0 padding-sm absolute">
                        7hrs
                    </div>
                </div>
            </div>
        )
    }
}