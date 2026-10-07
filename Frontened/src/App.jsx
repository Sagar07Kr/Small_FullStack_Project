import React from 'react'
import Card from './Card';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [data, setdata] = useState([]);


  // useEffect(()=>{
  //   async function getdata(){
  //     const product = await fetch("http://localhost:3000/"); 
  //     const dataa = await product.json();
  //     setdata(dataa);
  //   }
  //   getdata();
  // },[])

  async function getdata(){
      const product = await fetch("http://localhost:3000/"); 
      const dataa = await product.json();
      setdata(dataa);
    }
  getdata();
  
  return (
    <div>
        <Card data = {data}></Card>
    </div>
  )
}

export default App