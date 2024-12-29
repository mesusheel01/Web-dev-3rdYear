import React from "react";

const isRegistered = 1;


function Form() {
  return (

    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {isRegistered ? null: <input type="password" placeholder="Confirm Password" />}

      <button type="submit">{isRegistered? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;