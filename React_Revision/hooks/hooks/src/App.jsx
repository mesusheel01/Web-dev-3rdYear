import { useState } from "react";


const App = ()=>{

  const [count, setCount] = useState(0);

  return(
    <div>
      <h1>Counter!</h1>
      <div className="card">
      <h2>{count}</h2>
      <button onClick={() => setCount(count  => count + 1 )} >+</button>
      <button onClick={() => setCount(count  => count - 1 )} >-</button>

      </div>
    </div>
  )

}

export default App;