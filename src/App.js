// two fn ek add ek delete 

// usestate for rerendering 

import { useState } from "react";

//let tasklist = [];



function App() {
   
  const [task , setTask] = useState("");  // ye input ko handle krta hai jo user likh rha wo value settask mei jayega 

  const [tasklist , setTasklist]=  useState([]); // ye array aur ui ko handle krta hai arr mei value add krna agar valid input hai to 

  function AddTask(){
   
    if(task.trim() !== ""){  //  ye function string ke leading/trailing spaces hata deta hai aur agar kuch nhi bcha to add hi nhi hoga

      setTasklist([...tasklist , task]);// adding current entered task to the tasklist
      setTask(""); // input ko add task krne ke bad empty krdo

    }
  

  }

  function deleteTask(idx_to_delete){
    
    // whi element rkho jinka index idx_to_delet ke equal nhi hai naye wale list mei  //updatedlist 
    // phir setTasklist ko nayi list pass krdo taki ui pe re render ho jaye list 
   const updatedlist = tasklist.filter((_, idx) => idx !==idx_to_delete);
   setTasklist(updatedlist);

  }

// rendering of array of tasks == tasklist 
// also hr ek task ke aage delet button hai uspe click krenge index delettask fn ko jayega nya array bnayega us index wale ko filter out kr dega aur nya array rerender krwa dega settasklist(new_list) se 
  const tasks = tasklist.map((curr_task , idx) => (<li key = {idx}>{curr_task}
  <button style = {{marginLeft : "10px" , color : "red"}} onClick={() => deleteTask(idx)}>
     ❌</button>
     
  </li>
  ));





  return (
   <div style={{display:"flex" ,
    justifyContent : "center" , 
    alignItems:"center" ,
    flexDirection:"column",
    height:"100vh",
    gap : "20px",
   }}>

    <input type="text" placeholder="Enter the task you want to do" value = {task} onChange={(e) => setTask(e.target.value)}></input>
    <button onClick={AddTask}> Add task</button>


    <h2>Tasklist</h2>
    <u1>{tasks}</u1>
   </div>




  );
}

export default App;
