import React from 'react'
import { useState } from 'react'

function UseSate() {

    const [count , setCount] = useState(0);
    const [person, setPerson] = useState();

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
        <hr />
        {/* useState Objects */}
        <input onChange={(e)=>setPerson( e.target.value)}type="text" />
        <p>Given value = {person}</p>
    </div>
  )
}

export default UseSate