// Step 1
function add(a, b) {return a+b;}
function subtract(a, b) {return a-b;}
function multiply(a, b) {return a*b;}
function divide(a, b) {return a/b;}

// Step 3
function operate(n1, n2, operation) {
    n1 = Number(n1);
    n2 = Number(n2);
    switch (operation) {
        case "add": return add(n1, n2);
        case "subtract": return subtract(n1, n2);
        case "multiply": return multiply(n1, n2);
        case "divide": return divide(n1, n2);
    }
}


// Step 5
let displayValue = 0;

const display = document.querySelector("#display");
display.textContent = `${displayValue}`;


// AC button
const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    displayValue = 0;
    display.textContent = `${displayValue}`;
});


// Number buttons
const btn0 = document.querySelector("#btn0");
btn0.addEventListener("click", () => {
    if (displayValue == 0) {
        displayValue = "";
    };
    displayValue += "0";
    display.textContent = `${displayValue}`;
});
const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
    if (displayValue == 0) {
        displayValue = "";
    };
    displayValue += "1";
    display.textContent = `${displayValue}`;
});
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
    if (displayValue == 0) {
        displayValue = "";
    }
    displayValue += "2";
    display.textContent = `${displayValue}`;
});
const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
    if (displayValue == 0) {
        displayValue = "";
    }
    displayValue += "3";
    display.textContent = `${displayValue}`;
});
const btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", () => {
    if (displayValue == 0) {
        displayValue = "";
    }
    displayValue += "4";
    display.textContent = `${displayValue}`;
});
const btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", () => {
    if (displayValue == 0) {
        displayValue = "";
    }
    displayValue += "5";
    display.textContent = `${displayValue}`;
});
const btn6 = document.querySelector("#btn6");
btn6.addEventListener("click", () => {
    if (displayValue == 0) {
        displayValue = "";
    }
    displayValue += "6";
    display.textContent = `${displayValue}`;
});
const btn7 = document.querySelector("#btn7");
btn7.addEventListener("click", () => {
    if (displayValue == 0) {
        displayValue = "";
    }
    displayValue += "7";
    display.textContent = `${displayValue}`;
});
const btn8 = document.querySelector("#btn8");
btn8.addEventListener("click", () => {
    if (displayValue == 0) {
        displayValue = "";
    }
    displayValue += "8";
    display.textContent = `${displayValue}`;
});
const btn9 = document.querySelector("#btn9");
btn9.addEventListener("click", () => {
    if (displayValue == 0) {
        displayValue = "";
    }
    displayValue += "9";
    display.textContent = `${displayValue}`;
});


// Step 2
let firstNumber;
let operator;
let secondNumber;


// Operator buttons
const btnAdd = document.querySelector("#add");
btnAdd.addEventListener("click", () => {
    firstNumber = displayValue;
    operator = "add";
    displayValue = 0;
});
const btnSubtract = document.querySelector("#subtract");
btnSubtract.addEventListener("click", () => {
    firstNumber = displayValue;
    operator = "subtract";
    displayValue = 0;
});
const btnMultiply = document.querySelector("#multiply");
btnMultiply.addEventListener("click", () => {
    firstNumber = displayValue;
    operator = "multiply";
    displayValue = 0;
});
const btnDivide = document.querySelector("#divide");
btnDivide.addEventListener("click", () => {
    firstNumber = displayValue;
    operator = "divide";
    displayValue = 0;
});


// Equals button
const equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
    secondNumber = displayValue;
    displayValue = operate(firstNumber, secondNumber, operator);
    display.textContent = `${displayValue}`;
});