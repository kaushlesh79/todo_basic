

import React ,{useContext} from "react";

import {todocontext} from "../context/todocontext";


 const Todolist = () => {

    const {task , tasklist ,setTasklist , deleteTask} = useContext(todocontext);

    function togglefn(index){
    const updatedlist = tasklist.map((t , idx) => idx===index ? {...t , completed : !t.completed} : t);
    setTasklist(updatedlist); // it will rerender the ui and do the changes as state is change for redux 
  }

   return (

    <div>
        <h2>Tasklist</h2>
        <ul style ={{listStyle : "none" , padding : 0 }}>
        {tasklist.map((curr_task , idx) => (<li

key = {idx}
style = {{
  display : "flex" , 
  justifyItems : "center" ,
  alignItems : "center" ,
  gap : "10px" ,
  marginBottom : "10px"
}}>
  <input type ="checkbox" checked = {curr_task.completed} onChange={() => togglefn(idx)}></input>

  <span 
  style = {{
    textDecoration : curr_task.completed ? "line-through" : "none" ,
    color :curr_task.completed ? "green" : "black" , 

  }}
  >
    {curr_task.text}
  </span>
  <button onClick={() => deleteTask(idx)} style = {{color : "red"}}> ❌ </button>
</li> ))



};
</ul>
    </div>
   )
 }// final brack todolist component 

 export default Todolist;