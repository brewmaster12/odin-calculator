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

// Step 2
let firstNumber;
let operator;
let secondNumber;

// Step 5
let displayValue = 0;

const display = document.querySelector("#display");
display.textContent = `${displayValue}`;


// AC button
const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    firstNumber = undefined;
    operator = undefined;
    secondNumber = undefined;
    displayValue = 0;
    display.textContent = `${displayValue}`;
});


// Number buttons
function numFunction(numString) {
    if (displayValue == 0) {
        displayValue = "";
    };
    displayValue += numString;
    display.textContent = `${displayValue}`;
};


const btn0 = document.querySelector("#btn0");
btn0.onclick = () => numFunction("0");

const btn1 = document.querySelector("#btn1");
btn1.onclick = () => numFunction("1");

const btn2 = document.querySelector("#btn2");
btn2.onclick = () => numFunction("2");

const btn3 = document.querySelector("#btn3");
btn3.onclick = () => numFunction("3");

const btn4 = document.querySelector("#btn4");
btn4.onclick = () => numFunction("4");

const btn5 = document.querySelector("#btn5");
btn5.onclick = () => numFunction("5");

const btn6 = document.querySelector("#btn6");
btn6.onclick = () => numFunction("6");

const btn7 = document.querySelector("#btn7");
btn7.onclick = () => numFunction("7");

const btn8 = document.querySelector("#btn8");
btn8.onclick = () => numFunction("8");

const btn9 = document.querySelector("#btn9");
btn9.onclick = () => numFunction("9");





// Equals button
function equals() {
    if (firstNumber) {
    secondNumber = displayValue;
    displayValue = operate(firstNumber, secondNumber, operator);
    display.textContent = `${displayValue}`;
    }
};

const btnEquals = document.querySelector("#equals");
btnEquals.onclick = () => equals();


// Operator buttons
function opFunction(string) {
    if (firstNumber) equals();
    firstNumber = displayValue;
    operator = string;
    displayValue = 0;
}

const btnAdd = document.querySelector("#add");
btnAdd.onclick = () => opFunction("add");

const btnSubtract = document.querySelector("#subtract");
btnSubtract.onclick = () => opFunction("subtract");

const btnMultiply = document.querySelector("#multiply");
btnMultiply.onclick = () => opFunction("multiply");

const btnDivide = document.querySelector("#divide");
btnDivide.onclick = () => opFunction("divide");
