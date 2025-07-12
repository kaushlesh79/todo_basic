

// add fn + input field 

import React , {useContext} from "react";

import {todocontext} from "../context/todocontext";



const TodoForm = () => {

    const {task , setTask , tasklist , setTasklist} = useContext(todocontext);

     function AddTask(){
   
    if(task.text.trim() !== ""){  //  ye function string ke leading/trailing spaces hata deta hai aur agar kuch nhi bcha to add hi nhi hoga

      setTasklist([...tasklist , task]);// adding current entered task to the tasklist
      setTask({text :"" , completed : false}); // input ko add task krne ke bad empty krdo 
      // as task abject hai to text ko empty krdo completed to hmesha false rhega till delete na kre 

    }
  

  

     }


return (
  <div style={{listStyle : "none" , padding : 0}}>
 <input type="text" placeholder="Enter the task you want to do" value = {task.text}  style ={{marginRight : "10px"}} onChange={(e) => setTask({...task ,  text:e.target.value})}></input>
    <button onClick={AddTask}> Add task</button>
  </div>
 


)


}// todoform component final bracket

export default TodoForm;