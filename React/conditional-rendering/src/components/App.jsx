import React from "react";
import Login from "./Login";
import { render } from "react-dom";

var islogged = false;

const currentTime = new Date(2023,10,1,18).getHours();

function App() {
  return (
    <div className="container">
    {/* {islogged ? <h1>Hello</h1> : <Login />} */}
    currentTime > 12 &&   <h1>Why are you still working??</h1>
    </div>
  );
}

export default App;
