// two fn ek add ek delete 

// usestate for rerendering 

import { useState } from "react";

//let tasklist = [{text:"---" , completed : false}];



function App() {
   
  const [task , setTask] = useState({text : "" , completed : false});  // ye input ko handle krta hai jo user likh rha wo value settask mei jayega 
  // now task ab object bn chuka hai ab state mei text aur completed dono rhengi 

  const [tasklist , setTasklist]=  useState([]); // ye array aur ui ko handle krta hai arr mei value add krna agar valid input hai to 

  function AddTask(){
   
    if(task.text.trim() !== ""){  //  ye function string ke leading/trailing spaces hata deta hai aur agar kuch nhi bcha to add hi nhi hoga

      setTasklist([...tasklist , task]);// adding current entered task to the tasklist
      setTask({text :"" , completed : false}); // input ko add task krne ke bad empty krdo 
      // as task abject hai to text ko empty krdo completed to hmesha false rhega till delete na kre 

    }
  

  }

  function deleteTask(idx_to_delete){
    
    // whi element rkho jinka index idx_to_delet ke equal nhi hai naye wale list mei  //updatedlist 
    // phir setTasklist ko nayi list pass krdo taki ui pe re render ho jaye list 
  
    const updatedlist=tasklist.filter((_, idx) => idx !==idx_to_delete );
    setTasklist(updatedlist);


  }

  // toggle fn for chenging button as toogle btn tick and cross 

  // if index equal to idx now change the completed of that tas to false 

  function togglefn(index){
    const updatedlist = tasklist.map((t , idx) => idx===index ? {...t , completed : !t.completed} : t);
    setTasklist(updatedlist); // it will rerender the ui and do the changes as state is change for redux 
  }

// rendering of array of tasks == tasklist 
// also hr ek task ke aage delet button hai uspe click krenge index delettask fn ko jayega nya array bnayega us index wale ko filter out kr dega aur nya array rerender krwa dega settasklist(new_list) se 
 
//tasklist ui pe render krne ke liye 

const tasks = tasklist.map((curr_task , idx) => (<li

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
</li> ));





  return (
   <div style={{display:"flex" ,
    justifyContent : "center" , 
    alignItems:"center" ,
    flexDirection:"column",
    height:"100vh",
    gap : "20px",
   }}>

    {/* // as ab task ek object hai to hmari value task.text rhegi  aur settask se task ya state me task.text ki value ko input mei show kr rhe hai  */}
    
    <input type="text" placeholder="Enter the task you want to do" value = {task.text} onChange={(e) => setTask({...task ,  text:e.target.value})}></input>
    <button onClick={AddTask}> Add task</button>

   
    <h2>Tasklist</h2>
    <ul style ={{listStyle : "none" , padding : 0 }}>{tasks}</ul>
   </div>




  );
}

export default App;
