import React, {Component} from 'react';
export default class HealthMetrics extends Component {
    render(){
        return (
            <div className='c-100'>
                <div className='border-bottom'>
                    Heartbeat rate
                    <div className='l-apple-box-multiple'></div>
                    <div className='l-apple-box-multiple'></div>   
                </div>
                <div className='border-bottom'>
                    Blood pressure
                    <div className='l-apple-box-multiple'></div>   
                    <div className='l-apple-box-multiple'></div>  
                </div>
                <div className='border-bottom'>
                    Sleep hours
                    <div className='l-apple-box-multiple'></div>  
                    <div className='l-apple-box-multiple'></div>   
                </div>
            </div>
        )
    }
}