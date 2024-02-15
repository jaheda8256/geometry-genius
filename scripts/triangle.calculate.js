/* 
* objective: get base, height of  a triangle. calculate the area by using the provided formula.and then display the area.
*step-1 :get base value of the tringle
step-2 : added the id in the base input field
step-3: use  getElementBYId to access the input field
step-4:get value from the input field (value is  string now)
step-5:convert the value of a number.use parseFloat
*/



function calculateTriangleArea(){
    // console.log('inside function');
    // get triangle base value 
    const triangleBaseInput = document.getElementById('triangle-base');
    // console.log(triangleBaseInput);
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    console.log(base);
    // get triangle height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    console.log(height);
    // calculate triangle area
    const area = 0.5 * base * height;
    console.log('area of the triangle is:', area);
    // display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}