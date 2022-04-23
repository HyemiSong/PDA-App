import React, {Component} from 'react';
export default class Menu extends Component {
    render(){
        return (
            <div className='border-top relative t-14'>
                <div className="marquee">
                    <ul className="flex centering">
                        <li className="margin-right-md">
                        <input type="button" value="Dashboard"
                                onClick={function(){
                            }.bind(this)}></input>
                        </li>
                        <li className="margin-right-md">
                            <input type="button" value="Manual Reports"
                                onClick={function(){
                                let _recommend = false;
                                let _report = true;
                                let _popup = false;
                                let _recommendLists = false;

                                this.props.onClosePop(_popup)
                                this.props.onOpenRec(_recommend)
                                this.props.onOpenRep(_report)
                                this.props.onOpenRecLists(_recommendLists)
                            }.bind(this)}></input>
                        </li>
                        <li className="margin-right-md">
                        <input type="button" value="Recommendations"
                                onClick={function(){
                                let _recommend = false;
                                let _report = false;
                                let _popup = false;
                                let _recommendLists = true;

                                this.props.onClosePop(_popup)
                                this.props.onOpenRec(_recommend)
                                this.props.onOpenRep(_report)
                                this.props.onOpenRecLists(_recommendLists)
                            }.bind(this)}></input>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}