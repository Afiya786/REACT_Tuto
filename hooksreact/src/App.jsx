import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter , setCounter] = useState(15); //here counter in the prameter is just like let counter only 
//setCounter is responsible to update the value of counter
const addValue = () =>{
  console.log("clicked", Math.random());
  setCounter(counter + 1);
}
  return (
    <>
    <h1>Hooks in react</h1>
    <h2>counter value: {counter}</h2>
     <button onClick={addValue}>Add Value{counter}</button>  
     {/*we are only passing the refrence as we want that when clicked only then it will execute
    <br></br> */}
    <button>Remove Value</button>

    </>
  )
}

export default App
 