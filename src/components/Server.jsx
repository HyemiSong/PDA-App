import React, { useState, useEffect } from "react";
import PopUpRoot from "./PopUpRoot";

export default function Server(props){
  const [data, setData] = useState([]);
  const timer = props.timer;
  const _ispopUp = props.isPopUp;
  // const _isStressLevel = props.isStressLevel;
  const serverData = props.serverData;
  const [counter, setCounter] = useState(timer);
  const [currentIsPopUp, setCurrentIsPopUp] = useState(_ispopUp);
  
// *******
// Presentation
// *******
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await fetch('http://localhost:8080/actor', {mode:'cors'});
  //       const d = await response.json();
  //       const data = d.data
  //       console.log(data)
  //       setData(data);
  //       props.onServerData(data);
  //     }
  //     catch (e) {
  //       console.log(e)
  //     }
  //   })()
  // }, [])
  // return (
  //   <div>
  //   </div>
  // )


// *******
// submission
// *******
  useEffect(() => {
    const countdown = setInterval(() => {
      let count = timer + 1;
      let popup, isStressLevel;
          //parsing server datta
            fetch('http://localhost:8080/data')
            .then(res => res.json())
            .then(json => {
              const d = json;
              const data = d.data;
  
              //detect stresslevel, open popup
              if(serverData.treatmentExists == "yes"){isStressLevel = true}else{isStressLevel = false}

              setCounter(count);
              props.onCounter(count);
              //props.onClosePop(popup);
              setData(data);
              props.onServerData(data);

              //console.log(_ispopUp)
        });
    }, 5000);
    return () => clearInterval(countdown);
  }, [timer, _ispopUp]);


// *******
// submission-async
// *******
// useEffect(() => {
//   const countdown = setInterval(() => {
//     let count = timer + 1;
//     let popup, isStressLevel;
//     (async () => {
//       try {
//         //parsing server datta
//         const response = await fetch('http://localhost:8080/data', {mode:'cors'});
//         const d = await response.json();
//         const data = d.data;
//         setData(data);
//         props.onServerData(data);

//         //detect stresslevel, open popup
//         //if(serverData.currentStressLevel - serverData.previousStressLevel == 0){isStressLevel = true}else{isStressLevel = false}
//         if(serverData.treatmentExists == "yes"){isStressLevel = true}else{isStressLevel = false}

//         if(isStressLevel == false){
//             popup = false //_ispopUp ? false : true;
//         }else if(isStressLevel == true){
//             popup = true //_ispopUp ? true : false;
//         }

//         console.log(serverData.treatmentExists)
//         console.log("previousStressLevel"+serverData.previousStressLevel)
//         console.log("currentStressLevel"+serverData.currentStressLevel)
//         console.log(popup)
//         setCounter(count);
//         setCurrentIsPopUp(popup);
//         props.onCounter(count);
//         props.onClosePop(popup);

//         // const{ isPopUp } = this.props;
//         // let manageModal = null;
//         //  if(isPopUp === false){
//         //     manageModal = null;
//         //  }else if(isPopUp === true){
//         //     manageModal = <PopUpRoot/>
//         //  }
//       }
//       catch (e) {
//         console.log(e)
//       }
//     })()
//   }, 5000);
//   return () => clearInterval(countdown);
// }, [timer, _ispopUp]);


  return (
    <div>
         {/* <div className="z-index-three absolute centering-all">{this.Popup()}</div> */}
    </div>
  )
}