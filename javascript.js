// Operation function
function operate(n1, n2, operation) {
    n1 = Number(n1);
    n2 = Number(n2);
    switch (operation) {
        case "add": return (n1+n2);
        case "subtract": return (n1-n2);
        case "multiply": return (n1*n2);
        case "divide": return (n1/n2);
    }
}


// Variables
let firstNumber;
let operator;
let secondNumber;
let displayValue = 0;

const display = document.querySelector("#display");
display.textContent = `${displayValue}`;


// AC button
function clear() {
    firstNumber = undefined;
    operator = undefined;
    secondNumber = undefined;
    displayValue = 0;
}

const btnAc = document.querySelector("#clear");
btnAc.addEventListener("click", () => {
    clear();
    display.textContent = `${displayValue}`;
});


// Number buttons
function numberButton(numString) {
    if (displayValue == 0) {displayValue = "";};
    if (displayValue.length < 8) {
        displayValue += numString;
        display.textContent = `${displayValue}`;
    }
};

const btn0 = document.querySelector("#btn0");
btn0.onclick = () => numberButton("0");
const btn1 = document.querySelector("#btn1");
btn1.onclick = () => numberButton("1");
const btn2 = document.querySelector("#btn2");
btn2.onclick = () => numberButton("2");
const btn3 = document.querySelector("#btn3");
btn3.onclick = () => numberButton("3");
const btn4 = document.querySelector("#btn4");
btn4.onclick = () => numberButton("4");
const btn5 = document.querySelector("#btn5");
btn5.onclick = () => numberButton("5");
const btn6 = document.querySelector("#btn6");
btn6.onclick = () => numberButton("6");
const btn7 = document.querySelector("#btn7");
btn7.onclick = () => numberButton("7");
const btn8 = document.querySelector("#btn8");
btn8.onclick = () => numberButton("8");
const btn9 = document.querySelector("#btn9");
btn9.onclick = () => numberButton("9");


// Decimal button
const btnDecimal = document.querySelector("#decimal");
btnDecimal.addEventListener("click", () => {
    if (!displayValue.includes(".")) numberButton(".");
});


// Percentage button
const btnPercentage = document.querySelector("#percentage");
btnPercentage.addEventListener("click", () => {
    displayValue *= 0.01;
    display.textContent = `${(parseFloat(displayValue.toFixed(8)))}`;
});


// Backspace button
const btnBackspace = document.querySelector("#backspace");
btnBackspace.addEventListener("click", () => {
    displayValue = displayValue.slice(0, -1);
    display.textContent = `${displayValue}`;
});


// Equals button
function equals() {
    if (firstNumber && operator) {
        secondNumber = displayValue;
        displayValue = operate(firstNumber, secondNumber, operator);
    
        // If divide by zero
        if (displayValue === Infinity) {
            display.textContent = "nice try ;)";
            clear();
        } else {
            display.textContent = `${(parseFloat(displayValue.toFixed(8)))}`;
        }

        // Reset the operator to prevent bugginess with the equals button
        operator = undefined;
    }
};

const btnEquals = document.querySelector("#equals");
btnEquals.onclick = () => equals();


// Operator buttons
function operatorButton(string) {
    equals();
    firstNumber = displayValue;
    displayValue = 0;
    operator = string;
}

const btnAdd = document.querySelector("#add");
btnAdd.onclick = () => operatorButton("add");

const btnSubtract = document.querySelector("#subtract");
btnSubtract.onclick = () => operatorButton("subtract");

const btnMultiply = document.querySelector("#multiply");
btnMultiply.onclick = () => operatorButton("multiply");

const btnDivide = document.querySelector("#divide");
btnDivide.onclick = () => operatorButton("divide");

/*
To do:
    1. Number of decimal places
    2. CSS
    3. Keyboard support?
*/