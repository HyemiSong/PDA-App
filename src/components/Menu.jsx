import React, {Component} from 'react';
export default class Menu extends Component {
    render(){
        return (
            <div className='border-top relative t-14'>
                <div className="marquee">
                    <ul className="flex centering">
                        <li className="margin-right-md">Dashboard</li>
                        <li className="margin-right-md">
                            <input type="button" value="Manual Reports"
                                onClick={function(){
                                let _recommend = false;
                                let _report = true;
                                let _popup = false;

                                this.props.onClosePop(_popup)
                                this.props.onOpenRec(_recommend)
                                this.props.onOpenRep(_report)
                            }.bind(this)}></input>
                        </li>
                        <li className="margin-right-md">Notifications</li>
                    </ul>
                </div>
            </div>
        )
    }
}