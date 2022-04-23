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
                            <input className="defaultButton" type="text" name="title" value={this.state.newReport} onChange={function(e){
                                this.setState({newReport: e.target.value})
                            }.bind(this)}></input>
                        </div>
                    </div>
                    <input type="submit" value="Apply" className="primaryButton"/>
                    <div>
                        {this.display()}
                    </div>
                </div>
                </form>
            </div>
        )
    }
}