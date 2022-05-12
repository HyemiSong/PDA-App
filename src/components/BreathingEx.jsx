import React, {Component} from 'react';

export default class BreathingEx extends Component {
    state = {
        placeholder:this.props.placeholder,
        reports:this.props.reports,
        serverData:this.props.serverData,
        newReport:"My feeling is ",
        title:"Breathing Exercise",
        treatments:this.props.treatments,
        treatmentID:this.props.serverData.treatment.id
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

                    <div className='bg-white borderCorners-in title border-bottom canvas absolute'>
                        <div className='flex centring-all padding-sm'>
                            <div className='title t-23 t-med'>
                                {/* {this.state.title} */}
                                {this.state.serverData.treatment.title}
                            </div>
                        </div>
                        <div className='padding-sm'>
                            <div className="sub-inner-section">
                                <div className="font-size-12 text-grey">
                                    Follow this instruction!
                                </div>
                                <div>
                                <img src= {'treatment_images/' + this.props.treatments[this.state.treatmentID-1].img} alt="" className="breathing padding-top-xxsm centering" onLoad={
                                    function(e){
                                        // let _loaded = false;s
                                        // this.props.onLoad(_loaded);
                                        //console.log('../image/treatment_images/' + this.props.treatments[this.state.treatmentID-1].img)
                                        //console.log(this.state.treatmentID)
                                        // console.log(this.props.treatments)
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