import {sum} from "./utils.js";

// get DOM for addition
const addValue1 = document.getElementById('value1');
const addValue2 = document.getElementById('value2');
const addCalculate = document.getElementById('add-calculate');
const addResults = document.getElementById('add-results');
// get DOM for subtraction
const subValue1a = document.getElementById('value1a');
const subValue2a = document.getElementById("value2a");
const subCalculate = document.getElementById("subtract-calculate");
const subResults = document.getElementById("subtract-results");
// get DOM for multiplication
const multValue1b = document.getElementById("value1b");
const multValue2b = document.getElementById("value2b");
const multCalculate = document.getElementById("multiply-calculate");
const multResults = document.getElementById("multiply-results");
// get DOM for division
const divValue1c = document.getElementById("value1c");
const divValue2c = document.getElementById("value2c");
const divCalculate = document.getElementById("divide-calculate");
const divResults = document.getElementById("divide-results");

// event listener for button to deliver user results addition 


function addClick() {

const sum = sum(addValue1.valueAsNumber, addValue2.valueAsNumber);
addResults.textContent = sum;
    
    console.log(addResults);
}

addCalculate.addEventListener('click', addClick());


function multClick() {
    const sumMult = multValue1b.valueAsNumber * multValue2b.valueAsNumber;
    multResults.textContent = sumMult;
    
    console.log(addResults);
}

multCalculate.addEventListener('click', multClick())



function subClick() {
    const sumSub = subValue1a.valueAsNumber - subValue2a.valueAsNumber;
    subResults.textContent = sumSub;
   
    console.log(addResults);
}

subCalculate.addEventListener('click', subClick()) ;
    

















// event listener for button to deliver user results division
divCalculate.addEventListener('click', () => {
    const sumDiv = divValue1c.valueAsNumber / divValue2c.valueAsNumber;
    divResults.textContent = sumDiv;
    
})