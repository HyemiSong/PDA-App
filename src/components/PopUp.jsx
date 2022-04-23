import React, {Component} from 'react';
export default class PopUp extends Component {
    render(){
        return (
            <div>
                <div className='border bg-yellow padding-md'>
                <div>Your stress level: 3 to 4</div>
                <div>You need rest. Follows treatment and goes back home to rest</div>
                <input type="button" value="Learn more"
                    onClick={function(){
                    let _popup = false;
                    let _recommend = true;
                    this.props.onClosePop(_popup);
                    this.props.onOpenRec(_recommend)
                }.bind(this)}></input>
                <div></div>
                <input type="button" value="Decline"
                    onClick={function(e){
                    let _popup = false;
                    this.props.onClosePop(_popup);
                }.bind(this)}></input>
                </div>
            </div>
        )
    }
}