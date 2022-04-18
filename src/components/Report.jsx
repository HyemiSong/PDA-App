import React, {Component} from 'react';
export default class Report extends Component {
    state = {
        placeholder:this.props.placeholder

    }
    render(){
        return (
            <div>
                <div className='bg-white detailBg z-index-zero'>
                    <div>
                        Manual Report
                    </div>
                    <input type="button" value="Close"
                        onClick={function(){
                        let _recommend = false;
                        this.props.onOpenRep(_recommend)
                    }.bind(this)}></input>

                    <div className="sub-inner-section padding-top-xsm">
                        <div className="font-size-12 text-grey">
                            Memo
                        </div>
                        <div className="font-size-14">
                            <input className="defaultButton" type="text" name="title" value={this.state.placeholder} onChange={function(e){
                                this.setState({placeholder: e.target.value})
                            }.bind(this)}></input>
                        </div>
                    </div>
                    <input type="submit" value="Apply" className="primaryButton"/>
                </div>
            </div>
        )
    }
}