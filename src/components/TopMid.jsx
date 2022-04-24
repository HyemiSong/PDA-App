import React, {Component} from 'react';
import StressLevel from '../containers/StressLevel';
export default class StressLevelRoot extends Component {
    render(){
        return (
            <div className='border-right border-left bg-darkblue'>
                <div className="txt-white t-12 padding-ssm">Hyemi's PDA</div>
                <div className='padding-md'>
                    <StressLevel/>
                    <div className='l-apple-box-m'></div>
                </div>
            </div>
        )
    }
}