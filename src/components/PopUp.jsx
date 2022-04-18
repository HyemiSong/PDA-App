import React, {Component} from 'react';
export default class PopUp extends Component {
    render(){
        return (
            <div>
                <div className='border bg-yellow padding-md'>
                <h1>Stress level update</h1>
                <input type="button" value="Close"
                    onClick={function(e){
                    let _popup = false;
                    this.props.onClosePop(_popup);
                }.bind(this)}></input>
                <input type="button" value="Learn more"
                    onClick={function(){
                    let _popup = false;
                    let _recommend = true;
                    this.props.onClosePop(_popup);
                    this.props.onOpenRec(_recommend)
                }.bind(this)}></input>
                </div>
            </div>
        )
    }
}