import React from "react";
import emojipedia from "../emojipedia";
import Card from "./emojiCard";


var nums = [1,5,"3",56,2,6,3]


// function double(x){
//     return x*2;
// }

// const doubleNums = nums.reduce((accumulator,currentNumber)=>{
//   console.log("accumulator "+ accumulator )
//   console.log("currentNumber  "+ currentNumber  )
//   return accumulator +currentNumber;
// });
// console.log(doubleNums);
// console.log(nums.find(function(num){
//   return num>10;
// }))
// console.log(nums.findIndex(function(nums){
//   return 3 === nums;
// }))
//Find = find the first item that matches from an array;
//FindIndex = find the index of the first item that matches.

const newEmoj = emojipedia.map((nums)=>{
  return nums.meaning.substring(0,100);
})
console.log(newEmoj)

function createCard(emo) {
  return (
    <Card 
      id={emo.id}
      key={emo.id}
      emoji={emo.emoji}
      name={emo.name}
      meaning={emo.meaning}
    />
  )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(createCard)}
      </dl>
    </div>
  );
}

export default App;
