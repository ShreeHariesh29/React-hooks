import React from 'react'
import { useState } from 'react'

function UseSate() {

    const [count , setCount] = useState(0);

    const decreaser = ()=>{
        setCount(count - 1)
    }

  return (
    <div>
        <h2>Number increasing and decreasing using useState</h2>
        <p>{count}</p>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count + 1)}>Press to increase the number</button>
        <button onClick={decreaser}>Press to decrease</button>
    </div>
  )
}

export default UseSate