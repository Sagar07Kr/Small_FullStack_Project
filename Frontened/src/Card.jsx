import React from 'react'

function Card({data}) {  
  console.log(data);  
  return (
    <div>
       { 
       data.map((pro)=>{
            return(
                <div style={{backgroundColor:'skyblue'}}>
                      <h1>{pro.title}</h1>
                      <h1>{pro.description}</h1>
                      <h1>{pro.category}</h1>
                      <h1>{pro.price}</h1>
                      <b><br /></b>
                      <b><br /></b>
                </div>
            )
       })
       }
    </div>
  )
}

export default Card