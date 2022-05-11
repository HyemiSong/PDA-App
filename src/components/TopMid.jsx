import React, {Component} from 'react';
import StressLevel from '../containers/StressLevel';
export default class StressLevelRoot extends Component {
    render(){
        return (
            <div className='bg-darkblue'>
                <div className="borderCorners-top marquee-top bg-darkblue"></div>
                <div className="txt-white t-12 margin-top-sm margin-left-sm">Hyemi's PDA</div>
                <div className='padding-md'>
                    <StressLevel/>
                    <div className='l-apple-box-m'></div>
                </div>
            </div>
        )
    }
}