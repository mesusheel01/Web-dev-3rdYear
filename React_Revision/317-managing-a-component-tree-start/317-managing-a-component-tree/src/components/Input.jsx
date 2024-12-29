import { useState } from "react";

const Input = (props)=>{
  const [inputText, setInputText] = useState("");

    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
      }

    return (
        <>
    <div className="form">
        <input onChange={handleChange} type={props.text} value={inputText} />
        <button onClick={()=>{
            props.Item(inputText)
            setInputText("");
        }}>
          <span>Add</span>
        </button>
      </div>
        </>
    )
}
export default Input;