// Kindly do not modify the prewritten code.
// Your task is to implement the functions below to make the calculator work.

let display = document.getElementById('display');
let currentInput = '';

function clearDisplay() {
    // TODO: Implement the clearDisplay function
    // This function should reset the currentInput and update the display
    currentInput = '';
    display.textContent = 0;
}

function deleteLast() {
    // TODO: Implement the deleteLast function
    // This function should remove the last character from currentInput and update the display
    currentInput = currentInput.slice(0,-1);
    if (display.textContent.length==1){
        display.textContent = 0;
    }
    else{
        display.textContent = display.textContent.slice(0, -1);
    }
      
}

function appendNumber(number) {
    // TODO: Implement the appendNumber function
    // This function should add the given number to currentInput and update the display
    currentInput = currentInput + number;
    
    if(display.textContent==0){
        display.textContent = display.textContent.slice(0, -1);
        display.textContent = display.textContent + number;
    }
    else{
        display.textContent = display.textContent + number;
    }
    

}

function appendOperator(operator) {
    // TODO: Implement the appendOperator function
    // This function should add the given operator to currentInput and update the display
    
    display.textContent = display.textContent + operator;
    if(operator=="%"){
        currentInput = currentInput + "*0.01";

    }
    else{
        currentInput = currentInput + operator;
    }
    
}

function calculateResult() {
    // TODO: Implement the calculateResult function
    // This function should evaluate the currentInput, display the result, and handle errors
    let result = eval(currentInput);
    currentInput = result;
    display.textContent = result;
    
}

