import React, {Component} from 'react';
export default class Report extends Component {
    state = {
        placeholder:this.props.placeholder,
        reports:this.props.reports,
        newReport:"My feeling is "
    }
    display(){
        let lists =[]
        let data = this.props.reports;
        for(let i =0; i < data.length; i++){
           lists.push(<li key={data[i].id}>{data[i].title}</li>)
        }
        return (
            <nav>
          <ul>
             {lists}
          </ul>
          </nav>
          );
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
                        <div className='title t-med t-23'>
                           My profile
                        </div>
                        <div className='fixed right-0 margin-right-ssm'>
                            <input type="button" value="Close"
                                onClick={function(){
                                let _recommend = false;
                                this.props.onOpenRep(_recommend)
                            }.bind(this)}></input>
                        </div>
                    </div>
                    <div className='padding-sm'>
                        <div className="sub-inner-section">
                            <div className="font-size-12 text-grey">
                                My current feeling...
                            </div>
                            <div className='flex'>
                                <div className="font-size-14 padding-sm centering">
                                    {/* <input type="button" value="Very Sad" className="margin-right-ssm"
                                        onClick={function(){
                                    }.bind(this)}></input> */}
                                    <input type="button" value="Sad" className="margin-right-ssm"
                                        onClick={function(){
                                    }.bind(this)}></input>
                                    <input type="button" value="Gloomy" className="margin-right-ssm"
                                        onClick={function(){
                                    }.bind(this)}></input>
                                    <input type="button" value="Good" className="margin-right-ssm"
                                        onClick={function(){
                                    }.bind(this)}></input>
                                    <input type="button" value="Happy"
                                        onClick={function(){
                                    }.bind(this)}></input>
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='padding-sm'>
                        <div className="sub-inner-section">
                            <div className="font-size-12 text-grey">
                                Treatments that I discovered...
                            </div>
                            <div className="font-size-14">
                            </div>
                        </div>
                    </div> */}
                    <div className="sub-inner-section padding-sm">
                        <div className="font-size-12 text-grey">
                            Quick updates: my medical info.
                        </div>
                        <div className="flex padding-sm">
                            <div className="font-size-14 margin-right-ssm">
                                <input className="defaultButton" type="text" name="title" value={this.state.newReport} onChange={function(e){
                                    this.setState({newReport: e.target.value})
                                }.bind(this)}></input>
                            </div>
                            <div>
                            <input type="submit" value="Save" className="primaryButton"/>
                            </div>
                        </div>
                    </div>
                    <div className='padding-sm'>
                        <div className="font-size-12 text-grey">
                            Updated medical info.
                        </div>
                        <div className="padding-sm">
                            {this.display()}
                        </div>
                    </div>
                </div>
                </form>
            </div>
        )
    }
}