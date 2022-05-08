import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Server(props){

  const makeAPICall = async () => {
    try {
      const response = await fetch('http://localhost:8080/actor', {mode:'cors'});
      const data = await response.json();
      console.log({ data })
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    makeAPICall();
  }, [])
  return (
    <div>
    </div>
  )

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //   (async () => {
    //     try {
    //       const response = await axios.get("localhost:8080/actor");
    //       //https://jsonplaceholder.typicode.com/users
    //       //http://localhost:8080/actor
    //       const data = response.data;
    //       console.log(data);
    //       setData(data);
    //       props.onServerData(data);
    //     } catch(err) {
    //       console.error(err);
    //     }
    //   })()
    // }, [])
    // return (
    //   <div></div>
    // )
  }