import React, { useState } from "react";


function TodoItem(props){
  // const [isDone,setisDone] = useState(false);

  // function handleClick(){
  //   setisDone(prev=>{
  //     return !prev;
  //   });
  // }
  return (
  <div onClick={()=>{
    props.onChecked(props.id);
  }}>
    <li >{props.text}</li>
    </div>
  )}  

export default TodoItem;