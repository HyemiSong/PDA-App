import React, {Component} from 'react';
export default class BreathingEx extends Component {
    render(){
        return (
            <div>
                <div className='bg-white detailBg z-index-zero'>
                    <div>
                        breathing detailsasdfa
                    </div>
                    <input type="button" value="Close"
                    onClick={function(){
                    let _recommend = false;
                    this.props.onOpenRec(_recommend)
                }.bind(this)}></input>
                </div>
            </div>
        )
    }
}