import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './Team'
import Friends from './Friends'


function App() {
  const [count, setCount] = useState(0)
    function handleClick(){
      alert ('button clicked')
    }

    const addToFive = (num) =>{
      alert(num+5);
    }

  return (
    <>
      
      <h3>React Core Concepts </h3>
      <friend></friend>
     
      <Friends></Friends>
      <Team></Team>

      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() =>addToFive(10)} >Click me 2</button>

     
      
      
    </>
    
  )
}




export default App


