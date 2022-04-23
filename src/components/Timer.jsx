import React, {useRef, useState, useEffect, useInterval, setCount} from 'react';
export default function Timer(props) {
const timer = props.timer;
const _ispopUp = props.isPopUp;
const [counter, setCounter] = useState(timer)
const [currentIsPopUp, setCurrentIsPopUp] = useState(_ispopUp)

useEffect(() => {
    const countdown = setInterval(() => {
        let count = timer + 1;
        let popup;
        if(count === 2 || count === 5){
            popup = _ispopUp ? false : true;
        }else if(count !==2  && count !==5){
            popup = _ispopUp ? true : false;
        }else{
            popup = currentIsPopUp;
        }
        setCounter(count);
        setCurrentIsPopUp(popup);
        props.onCounter(count);
        props.onClosePop(popup);
    }, 3000);
    return () => clearInterval(countdown);
  }, [timer, _ispopUp]);
    return (
        <div></div>
    )
}