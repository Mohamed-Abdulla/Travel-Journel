import React from "react";
import data from './data';
import Header from "./header";
import Page from "./Page";

export default function App(){
  let page=data.map(item=>{
    return (
      <div>
        <Page
        // key={title}
        {...item}
        />      
      </div>          
    )
  })
  return(
    <div>
      <Header />
      
      {page}


    </div>
  )
}


