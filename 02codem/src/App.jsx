import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[counter,setCounter]=useState(15)
  // let counter=15;
  const addValue= ()=> {
   
    // counter=counter+1
    setCounter(counter=()=>counter+1)
    setCounter(counter=()=>counter+1)
    setCounter(counter=()=>counter+1)
    setCounter(counter=()=>counter+1)
    // console.log("clicked",counter);
  }
  const removeValue=()=>{
    setCounter(counter-1)
  }
  return (
    <>
    
      <h1>Chai Aur React</h1>
      <h2>Counter value:{counter} </h2>
      <button onClick={addValue}>Add Value{counter}</button>
      <br/>
      <button onClick={removeValue}>
        decrease value{counter}
      </button>
      <p>
        footer:{counter}
      </p>
     
    </>
  )
}

export default App
