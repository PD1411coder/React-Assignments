import React from 'react';
import Header from './Components/Header';
import './Postview.css';
import { useState, useEffect } from 'react'
import Card from './Components/Card';


const Postview=()=> {
  const [array, setArray] = useState([])
    useEffect(() => {
      async function getData(){
          let data = await fetch("http://localhost:3004/user");
          let object = await data.json();
          console.log(object);
          setArray([...object]);
      }
    getData();
    
    }, [])
  
  
  return (
    <div className="site-container">
      <Header/>
      <div className='container'>
        {array.length? array.map((obj, index)=>{
          return <Card key={index} obj={obj}/>
          
          
        })
      :""}
      {console.log(array)}
      </div>
    </div>
  );
};

export default Postview;
