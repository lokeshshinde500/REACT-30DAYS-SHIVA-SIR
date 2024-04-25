import { useState,useEffect } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  },[])

  return <>
    <h1>hello react</h1>
    <h1>{count}</h1>
    <button type="button" onClick={()=>setCount(count+1)}>click me</button>
  </>
  
}

export default App
