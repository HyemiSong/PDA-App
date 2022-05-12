import React, {Component} from 'react';
export default class PopUp extends Component {
    state = {
        serverData:this.props.serverData
    }
    treatmentOn(){
        let treatOn = this.props.serverData.treatements;
        let sum
        
        if (treatOn == null){
            sum = null;
        }else{
            sum = this.props.serverData.treatment.summary;
        }
        return sum
    }
    render(){
        return (
            <div>
                <div className='bg-white dropshadow padding-sm'>
                    <div className='centering t-med t-21 padding-sm'>
                        Stress level has reached 
                        L{this.props.serverData.currentStressLevel}
                        &nbsp;from&nbsp;
                        L{this.props.serverData.previousStressLevel}
                    </div>
                    <div className='padding-sm'>
                        Stress Level is high. 
                        Follow this treatment:&nbsp;
                        {this.treatmentOn()}
                    </div>
                        <div className='flex centering padding-md'>
                            <input type="button" value="Learn more" className='margin-right-ssm'
                                onClick={function(){
                                let _popup = false;
                                let _recommend = true;
                                this.props.onClosePop(_popup);
                                this.props.onOpenRec(_recommend);
                                // console.log("currentStressLevel"+this.props.serverData.currentStressLevel)
                                // console.log("previousStressLevel"+this.props.serverData.previousStressLevel)
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