
import { useState } from 'react'
import './App.css'
import Tsk from './Tsk'
import Maincomp from './Maincomp'

function App() {
   let [todo , addtodo] = useState([])
  let [inp , updtinp] = useState('')
  
  const handlechange = (event) =>{
     updtinp(event.target.value)
     
  }

   const handletodo = () =>{
    // we implemented this logic so that , if there are two tasks having same name if we delete one the other one doesn't gets deleted coz id is uniques for everyone
    let newtodo = {
      id: todo.length == 0 ? 1 : todo[todo.length-1].id + 1 , 
      value: inp,
      completed: false,
    }
     let todolist = [...todo , newtodo]
     addtodo(todolist)
     console.log(todo)
   }

   const remvitem = (itmId) =>{
      addtodo(todo.filter((x) => {
           return x.id !== itmId
      }))
   } 

   const completeditm = (id) =>{
    addtodo(todo.map((obj) => {
      if(obj.id == id){
        return {...obj , completed: true}; // this is how we update an object
      }else{
        return obj;
      }
      
     }))}

  return (
    <>
  <Maincomp handlechange = {handlechange} handletodo = {handletodo}></Maincomp>

  <div className="list">
    {todo.map((item , index) =>{
      return(
       <Tsk key={index} task = {item} remfun = {remvitem} completeditm = {completeditm}></Tsk>
      )
    })}
    
  </div>
  </>
  )

}

export default App

