import React, {Component} from 'react';
export default class Menu extends Component {
    render(){
        return (
            <div className='t-14 z-index-three'>
                <div className="marquee padding-sm borderCorners-bottom">
                    <ul className="flex centering">
                        <li className="margin-right-ssm margin-left-ssm">
                        <input type="button" value="Dashboard"
                                onClick={function(){
                                let _recommend = false;
                                let _report = false;
                                let _popup = false;
                                let _recommendLists = false;

                                // this.props.onClosePop(_popup)
                                this.props.onOpenRec(_recommend)
                                this.props.onOpenRep(_report)
                                this.props.onOpenRecLists(_recommendLists)
                            }.bind(this)}></input>
                        </li>
                        <li className="margin-right-ssm">
                            <input type="button" value="My profile"
                                onClick={function(){
                                let _recommend = false;
                                let _report = true;
                                let _popup = false;
                                let _recommendLists = false;

                                // this.props.onClosePop(_popup)
                                this.props.onOpenRec(_recommend)
                                this.props.onOpenRep(_report)
                                this.props.onOpenRecLists(_recommendLists)
                            }.bind(this)}></input>
                        </li>
                        <li className="margin-right-ssm">
                        <input type="button" value="All Treatments"
                                onClick={function(){
                                let _recommend = false;
                                let _report = false;
                                let _popup = false;
                                let _recommendLists = true;

                                // this.props.onClosePop(_popup)
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