import React, {Component} from 'react';
export default class PopUp extends Component {
    render(){
        return (
            <div>
                <div className='bg-white dropshadow padding-sm'>
                    <div className='centering t-med t-21 padding-sm'>Stress level has reached L4 from L3</div>
                    <div>Stress Level is too high. Follow this treatment for breathing ex. and goes back home to rest.</div>

                        <div className='flex centering padding-sm'>
                            <input type="button" value="Learn more" className='margin-right-ssm'
                                onClick={function(){
                                let _popup = false;
                                let _recommend = true;
                                this.props.onClosePop(_popup);
                                this.props.onOpenRec(_recommend)
                            }.bind(this)}></input>
                            <input type="button" value="Decline"
                                onClick={function(e){
                                let _popup = false;
                                this.props.onClosePop(_popup);
                            }.bind(this)}></input>
                        </div>
                </div>
            </div>
        )
    }
}