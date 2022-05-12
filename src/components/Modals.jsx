import React, {Component} from 'react';
import PopUpRoot from "./PopUpRoot";
import BreathingExRoot from "./BreathingExRoot";
import ReportRoot from "./ReportRoot";
import RecommendRoot from "./RecommendRoot"

export default class Modals extends Component {
    Popup(){
        const{ isPopUp } = this.props;
        console.log(this.props.serverData)
        let manageModal = null;
         if(isPopUp === false){
            manageModal = null;
         }else if(isPopUp === true){
            manageModal = <PopUpRoot/>
         }
         return manageModal
     }
     Recommend(){
        const{ isRecommend } = this.props;
        let manageModal = null;
         if(isRecommend === false){
            manageModal = null;
         }else if(isRecommend === true){
            manageModal = <BreathingExRoot/>
         }
         return manageModal
     }
     RecommendLists(){
        const{ isRecommendLists } = this.props;
        let manageModal = null;
         if(isRecommendLists === false){
            manageModal = null;
         }else if(isRecommendLists === true){
            manageModal = <RecommendRoot/>
         }
         return manageModal
    }
     Report(){
        const{ isReport } = this.props;
        let manageModal = null;
         if(isReport === false){
            manageModal = null;
         }else if(isReport === true){
            manageModal = <ReportRoot/>
         }
         return manageModal
     }
    render(){
        return (
            <div>
               <div className="z-index-three absolute centering-all">{this.Popup()}</div>
               <div className="z-index-two absolute">{this.Recommend()}</div>
               <div className="z-index-two absolute">{this.Report()}</div>
               <div className="z-index-two absolute">{this.RecommendLists()}</div>
            </div>
        )
    }
}