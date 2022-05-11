import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Server(props){
  const [data, setData] = useState([]);
  
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://localhost:8080/actor', {mode:'cors'});
        const d = await response.json();
        const data = d.data
        console.log(data)
        setData(data);
        props.onServerData(data);
      }
      catch (e) {
        console.log(e)
      }
    })()
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