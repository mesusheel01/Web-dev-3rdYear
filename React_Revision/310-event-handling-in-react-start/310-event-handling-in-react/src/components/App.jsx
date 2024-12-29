import { useState } from "react";

function changeButtonColor(event, newColor) {
  event.target.style.backgroundColor = newColor;
}



const App = () => {
  

  function handleInput(event){
    console.log(event.target.value);
  }




  const [ mouseOver, setMouseOver] = useState(false)
  function handleMouseOver(){
    setMouseOver(true);
  }
  
  function handleMouseOut(){
    setMouseOver(false)
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <input onClick={handleInput} type="text" placeholder="What's your name?" />
      <button

        style={{backgroundColor:mouseOver? "black":"white"}}
        // onMouseOver={(event) => changeButtonColor(event, 'black')} // White on hover
        // onMouseOut={(event) => changeButtonColor(event, 'white')} // Black on mouse out
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
};

export default App;
