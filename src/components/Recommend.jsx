import React, {Component} from 'react';
export default class Recommend extends Component {
    state = {
        placeholder:this.props.placeholder,
        recommendAll:this.props.recommendAll
    }
    display(){
        return "lists"
        // let lists =[]
        // let data = this.props.recommendAll;
        // for(let i =0; i < data.length; i++){
        //    lists.push(<li key={data[i].id}>{data[i].title}</li>)
        // }
        // return (
        //     <nav>
        //   <ul>
        //      {lists}
        //   </ul>
        //   </nav>
        //   );
    }
    render(){
        return (
            <div>
                <div className='bg-white detailBg z-index-zero'>
                    <input type="button" value="Close"
                            onClick={function(){
                            let _recommend = false;
                            this.props.onOpenRecLists(_recommend)
                        }.bind(this)}></input>
                    {this.display()}
                </div>
            </div>
        )
    }
}