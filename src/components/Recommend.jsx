import React, {Component} from 'react';
export default class Recommend extends Component {
    state = {
        placeholder:this.props.placeholder,
        treatments:this.props.treatments
    }
    display(){
        let lists =[]
        let data = this.props.treatments;
        for(let i =0; i < data.length; i++){
            lists.push(
                <div className='padding-ssm'>
                    <li key={data[i].id}>{data[i].title}</li>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                </div>
            )
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
         
                <div className='bg-white detailBg title border-bottom'>
                    <div className='flex centring-all padding-sm'>
                        <div className='title t-med t-23'>
                           All Treatments
                        </div>
                        <div className='fixed right-0 margin-right-ssm'>
                            <input type="button" value="Close"
                                onClick={function(){
                                let _recommend = false;
                                this.props.onOpenRecLists(_recommend)
                            }.bind(this)}></input>
                        </div>
                    </div>
                    <div className='padding-sm'>
                        <div className="font-size-12 text-greys">
                        {this.display()}
                        </div>
                    </div>
                </div>
                </form>
            </div>
        )
    }
}