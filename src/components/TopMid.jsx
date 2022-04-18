import React, {Component} from 'react';
import StressLevel from '../containers/StressLevel';
export default class TopMid extends Component {
    render(){
        return (
            <div className='border-right border-left'>
                <div className='padding-lg'>
                    <div className='l-apple-box-multiple'></div>
                    <StressLevel/>
                    <div className='l-apple-box-m'></div>
                </div>
            </div>
        )
    }
}