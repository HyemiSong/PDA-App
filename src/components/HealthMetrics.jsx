import React, {Component} from 'react';
export default class HealthMetrics extends Component {
    render(){
        return (
            <div className='c-100 t-18 t-med'>
                <div className='flex border-bottom '>
                    <div className='padding-sm'>
                        Heartbeat rate
                        <div className='l-apple-box-multiple'></div>
                    </div>
                    <div className="t-bold t-40 right-0 padding-sm absolute">
                        75/min
                    </div>
                </div>
                <div className='flex border-bottom '>
                    <div className='padding-sm'>
                        Blood pressure
                        <div className='l-apple-box-multiple'></div>
                    </div>
                    <div className="t-bold t-40 right-0 padding-sm absolute">
                        120/80
                    </div>
                </div>
                <div className='flex border-bottom '>
                    <div className='padding-sm'>
                        Sleep hours
                        <div className='l-apple-box-multiple'></div>
                    </div>
                    <div className="t-bold t-40 right-0 padding-sm absolute">
                        7hrs
                    </div>
                </div>
            </div>
        )
    }
}