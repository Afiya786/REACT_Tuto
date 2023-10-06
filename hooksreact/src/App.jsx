import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter ,setCounter] = useState(0); //here counter in the prameter is just like let counter only 
//setCounter is responsible to update the value of counter
  const [counter1,getCounter] = useState(100);


const addValue = () =>{
if (counter >= 20){
  console.log("cannot exceed");
}
else{
setCounter(counter +1);

}
}

const removeValue = () =>{
  if (counter1 <= 90){
    console.log("cannot go down");
  }
  else{
  getCounter(counter1 - 1);
  
  }
}


  return (
    <>
    <h1>Hooks in react</h1>
    <h2>counter value: {counter}</h2>
    <h3>removing value {counter1}</h3>
     <button onClick={addValue}>Add Value{counter}</button>  
     {/*we are only passing the refrence as we want that when clicked only then it will execute
    <br></br> */}
    <button onClick={removeValue}>Remove Value{counter1}</button>

    </>
  )
}

export default App
 