// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import animals from "./data";
import cars from "./practice";

// console.log(animals);

// const { cat, dog } =  animals;
// console.log(cat)                                                        
// console.log(dog)
const [ honda, tesla ] = cars;

const {speedStats : {topSpeed: hondaTopSpeed} } = honda;
const {coloursByPopularity:[hondaTopColour]} = honda;
const {speedStats : {topSpeed: teslaTopSpeed} } = tesla;
const {coloursByPopularity:[teslaTopColour]} = tesla;


// const hondaTopColour = honda.coloursByPopularity[0];
// const hondaTopSpeed = honda.speedStats.toppeed;
// const teslaTopColour = tesla.coloursByPopularity[0];S
// const teslaTopSpeed  = tesla.speedStats.topSpeed;   
console.log(hondaTopSpeed)
console.log(hondaTopColour)
console.log(teslaTopSpeed)
console.log(teslaTopSpeed)

ReactDOM.render(
    
    <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table> 
  ,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

//   <table>
//   <tr>
//       <th>name</th>
//       <th>sound</th>
//   </tr>
//   <tr>
//       <td>{cat.name}</td>
//       <td>{cat.sound}</td>
//   </tr>
//   <tr>
//       <td>{dog.name}</td>
//       <td>{dog.sound}</td>
//   </tr>
// </table>
