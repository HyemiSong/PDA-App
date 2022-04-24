import React, {Component} from 'react';
import Graph from '../image/graph.png';

export default class TopMid extends Component {
    render(){
        return (
            <div className='bg-darkblue'>
                <div className='padding-sm st-med txt-white centering'>
                Stess level dashboard
                </div>
                <div>
                    <img src= {Graph} alt="" className="graph padding-top-xxsm centering" onLoad={
                        function(e){
                            // let _loaded = false;
                            // this.props.onLoad(_loaded);
                        }.bind(this)
                    }></img>
                </div>
            </div>
        )
    }
}