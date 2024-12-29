import { Add, Divide, Multiply, Sub } from "./assets/components/pi"


function App() {


  return (
    <>
      <ul>
        <li>{Add(4,5)}</li>
        <li>{Sub(3,4)}</li>
        <li>{Multiply(5,2) }</li>
        <li>{Divide(7,2) }</li>
      </ul>      
    </>
  )
}

export default App
