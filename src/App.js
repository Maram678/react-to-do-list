import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';



function App() {
  const [x,setx]=useState([])
  const inputRef=useRef()
  const add=()=>{
       const value=inputRef.current.value
       const newdata={completed:false,value}
      //  console.log(value)
      setx([...x,newdata])
     
      inputRef.current.value=""
  }

  const itemdone=(index)=>{
  const newx=[...x]
   x[index].completed=! x[index].completed
    setx(newx)
  }
   const deleteT=(index)=>{
    const newx=[...x]
    newx.splice(index,1)
    setx(newx)
   }
  // console.log(x)
  return (
    <div className="App">
    <h1>To Do List</h1>
    <ul>
      {
        x.map((item,index)=>{
          return <div className="div10" >
           <li className={item.completed? "difstyle" :"difstyle2"}  onClick={()=>itemdone(index)}>{item.value}</li>
           <span onClick={()=>deleteT(index)}>x</span>
           </div>
        })
      }
    </ul>

    <input type='input' ref={inputRef} placeholder='enter new task...'/>
    <button onClick={add}>add</button>
    </div>
  );
}

export default App;
