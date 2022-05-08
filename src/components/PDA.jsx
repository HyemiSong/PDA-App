import TopLeft from "../containers/TopLeft";
import TopMid from "../containers/TopMid";
import TopRight from "../containers/TopRight";

import MenuRoot from "./MenuRoot";
import HealthMetricsRoot from "./HealthMetricsRoot";
import ModalsRoot from "./ModalsRoot";

import TimerRoot from "./TimerRoot";
import ServerRoot from "./ServerRoot";

import React, {Component} from 'react';
export default class PDA extends Component {
    render(){
      return (
        <div>
            <TimerRoot />
            <ServerRoot />
            <div>
                <ModalsRoot />
            </div>
            <div className="z-index-zero">
                <div className="flex">
                    <div className="c-19 displayNone"><TopLeft/></div>
                    <div className="c-62"><TopMid/></div>
                    <div className="c-19 displayNone"><TopRight/></div>
                </div>
                <div className="flex">
                    <div className="c-100"><MenuRoot/></div>
                </div>
                <div className="flex ">
                <div className="c-100"><HealthMetricsRoot/></div>
                </div>
            </div>
        </div>
      )
  }
}