// two fn ek add ek delete 

// usestate for rerendering 

import React ,{ useEffect, useState , useRef } from "react";
import { todocontext } from "./context/todocontext";
import TodoForm from "./components/TodoForm";
import Todolist from "./components/Todolist";



//let tasklist = [{text:"---" , completed : false}];



function App() {
   
  const [task , setTask] = useState({text : "" , completed : false});  // ye input ko handle krta hai jo user likh rha wo value settask mei jayega 
  // now task ab object bn chuka hai ab state mei text aur completed dono rhengi 

  const [tasklist , setTasklist]=  useState([]); // ye array aur ui ko handle krta hai arr mei value add krna agar valid input hai to 


  // lets save the task in localstorage 

  //2 useffect on for .getitem and other for setitem and also one useref flag for stopping overwritting of task array just after component mount after refresh

  const hasMounted = useRef(false); // initially its false


  useEffect(() =>{
    
    const data = localStorage.getItem("todo-data");

    if(data){

      setTasklist(JSON.parse(data));  // data ko json me convert krdo hm local me as string save rte hai 
    }

  },[]);

  // as its dependency arr have taslist it will run whenever tasklist have changed
  useEffect(() => {

    if(hasMounted.current){

      localStorage.setItem("todo-data" , JSON.stringify(tasklist));
    }else{
    hasMounted.current = true;
    }
  } , [tasklist]); 

 
  function deleteTask(idx_to_delete){
    
    // whi element rkho jinka index idx_to_delet ke equal nhi hai naye wale list mei  //updatedlist 
    // phir setTasklist ko nayi list pass krdo taki ui pe re render ho jaye list 
  
    const updatedlist=tasklist.filter((_, idx) => idx !==idx_to_delete );
    setTasklist(updatedlist);


  }

  // toggle fn for chenging button as toogle btn tick and cross 

  // if index equal to idx now change the completed of that tas to false 

 

// rendering of array of tasks == tasklist 
// also hr ek task ke aage delet button hai uspe click krenge index delettask fn ko jayega nya array bnayega us index wale ko filter out kr dega aur nya array rerender krwa dega settasklist(new_list) se 
 
//tasklist ui pe render krne ke liye 







  return (

    <todocontext.Provider value ={{task , setTask , tasklist , setTasklist}}>
      <div style={{display:"flex" ,
    justifyContent : "center" , 
    alignItems:"center" ,
    flexDirection:"column",
    height:"100vh",
    gap : "20px",
   }}>

    {/* // as ab task ek object hai to hmari value task.text rhegi  aur settask se task ya state me task.text ki value ko input mei show kr rhe hai  */}
    
    <h2 style={{color:"blue"}}>Todolist</h2>
    <TodoForm/>
    <Todolist/>
    
    

   
    
    
   </div>



    </todocontext.Provider>
  

  );
}

export default App;
