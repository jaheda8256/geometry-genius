// function calculateParallelogram(){
//     // const baseInput = document.getElementById('parallelogram-base');
//     // const baseText = baseInput.value;
//     // const base = parseFloat(baseText);
// //     console.log(base);
// const base = grtParallelogram();
// console.log(base);
//  }
// function grtParallelogram(){
//      const baseInput = document.getElementById('parallelogram-base');
//     const baseText = baseInput.value;
//     const base = parseFloat(baseText);
//     return base;
// }
function calculateParallelogram(){
const base = getInputValueById('parallelogram-base');
const height = getInputValueById('parallelogram-height');
// console.log('height value', height);
const area = base * height;
console.log('base of the parallelogram is', area);
setInnerTextById('parallelogram-area',area);
}
 function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
    
 }
 function setInnerTextById(elementId,area){
const element = document.getElementById(elementId);
element.innerText = area;

 }