import React, {Component} from 'react';
import BreathingImg from '../image/breathing.png';

export default class BreathingEx extends Component {
    state = {
        placeholder:this.props.placeholder,
        reports:this.props.reports,
        newReport:"My feeling is "
    }
    render(){
        return (
            <div>
                <form onSubmit={function(e){
                    e.preventDefault()
                    let newReports = this.props.reports.concat();
                    newReports.push({id:this.props.reports.length+1, title:this.state.newReport});
                    this.props.onSubmitReport(newReports);
                }.bind(this)}>
         
                <div className='bg-white detailBg title border-bottom'>
                    <div className='flex centring-all padding-sm'>
                        <div className='title t-23 t-med'>
                            Breathing exercise 
                        </div>
                    </div>
                    <div className='padding-sm'>
                        <div className="sub-inner-section">
                            <div className="font-size-12 text-grey">
                                Follow this instruction!
                            </div>
                            <div>
                            <img src= {BreathingImg} alt="" className="breathing padding-top-xxsm centering" onLoad={
                                function(e){
                                    // let _loaded = false;
                                    // this.props.onLoad(_loaded);
                                }.bind(this)
                            }></img>
                            </div>
                        </div>
                    </div>
                    <div className="sub-inner-section padding-sm">
                        <div className="font-size-12 text-grey">
                            How Helpful was the treatment?
                        </div>
                        <div className="flex padding-sm">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <div className='fixed right-0 margin-right-md'>
                            <input type="button" value="I am done!"
                                onClick={function(){
                                let _recommend = false;
                                this.props.onOpenRec(_recommend)
                            }.bind(this)}></input>
                        </div>
                    </div>
                </div>
                </form>
            </div>
        )
    }
}