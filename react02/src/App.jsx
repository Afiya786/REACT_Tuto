import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username:"hammu",
    password:"afi"
  };

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'> This is a react project</h1>
     <Card name ="afiya" btnText="open it"/> {/* the alue you declare here will show in props */}
    <Card name="afu" btnText="open it"/>
    <Card/>



    </>
  )
}

export default App
