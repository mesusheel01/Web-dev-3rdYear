import React from "react"


function strike(){
  document.getElementById('root').style.textDecoration = "line-through"
}

function unstrike(){
  document.getElementById('root').style.textDecoration = null
}


const App = ()=> {

  return (
    <div>
    <p>Buy Milk</p>
    <button onClick={strike}>change to strike through</button>
    <button onClick={unstrike}>change to normal</button>
</div>
  )
}

export default App;