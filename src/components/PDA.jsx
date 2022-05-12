import TopMid from "../containers/TopMid";

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
            {/* <TimerRoot /> */}
            <div className="canvas centering-all borderCorners absolute">
                <div>
                    <ModalsRoot />
                </div>
                <div className="z-index-zero">
                    <div className="flex">
                        <div className="c-100"><TopMid/></div>
                    </div>
                    <div className="flex">
                        <div className="c-100"><HealthMetricsRoot/></div>
                    </div>
                </div>
                <div className="flex">
                    <div className="c-0 z-index-three"><MenuRoot/></div>
                </div>
            </div>
            <ServerRoot />
        </div>
      )
  }
}