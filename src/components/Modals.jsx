import React, {Component} from 'react';
import PopUpRoot from "./PopUpRoot";
import BreathingExRoot from "./BreathingExRoot";
import ReportRoot from "./ReportRoot";
import RecommendRoot from "./RecommendRoot"

export default class Modals extends Component {
    Popup(){
        const{ isPopUp } = this.props;
        const{ treatmentExists } = this.props.serverData;

        const A = this.props.isPopUp;

        console.log(A);
        console.log(treatmentExists);
        console.log("previousStressLevel"+this.props.serverData.previousStressLevel);
        console.log("currentStressLevel"+this.props.serverData.currentStressLevel);

        let manageModal = null;
         if(treatmentExists === "no"){
            manageModal = null;
         }else if(treatmentExists === "yes" ){
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