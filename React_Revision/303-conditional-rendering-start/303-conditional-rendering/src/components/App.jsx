import React from "react";
import Form from "./login"


var isLogged = 0;

const currenTime = new Date().getHours();
console.log(currenTime);  


function App() {
  return (
    <div className="container">
    
    {/* //here we used ternary operator to check if user is logged in or not: if they arre logged in then ew say them hello otherwise we show them log in form */}
    {isLogged ? <h1>Hello User!</h1> :  <Form />}
    </div>
  );
}

export default App;
