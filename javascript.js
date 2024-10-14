function add(a, b) {return a+b;}
function subtract(a, b) {return a-b;}
function multiply(a, b) {return a*b;}
function divide(a, b) {return a/b;}

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
function pressNumberButton(numString) {
    if (displayValue == 0) {displayValue = "";};
    displayValue += numString;
    display.textContent = `${displayValue}`;
};


const btn0 = document.querySelector("#btn0");
btn0.onclick = () => pressNumberButton("0");

const btn1 = document.querySelector("#btn1");
btn1.onclick = () => pressNumberButton("1");

const btn2 = document.querySelector("#btn2");
btn2.onclick = () => pressNumberButton("2");

const btn3 = document.querySelector("#btn3");
btn3.onclick = () => pressNumberButton("3");

const btn4 = document.querySelector("#btn4");
btn4.onclick = () => pressNumberButton("4");

const btn5 = document.querySelector("#btn5");
btn5.onclick = () => pressNumberButton("5");

const btn6 = document.querySelector("#btn6");
btn6.onclick = () => pressNumberButton("6");

const btn7 = document.querySelector("#btn7");
btn7.onclick = () => pressNumberButton("7");

const btn8 = document.querySelector("#btn8");
btn8.onclick = () => pressNumberButton("8");

const btn9 = document.querySelector("#btn9");
btn9.onclick = () => pressNumberButton("9");

// Decimal button
const btnDecimal = document.querySelector("#decimal");
btnDecimal.onclick = () => pressNumberButton(".");

// Percentage button
const btnPercentage = document.querySelector("#percentage");
btnPercentage.addEventListener("click", () => {
    displayValue *= 0.01;
    display.textContent = `${displayValue}`;
});

// Backspace button
const btnBackspace = document.querySelector("#backspace");
btnBackspace.addEventListener("click", () => {
    displayValue = displayValue.slice(0, -1);
    display.textContent = `${displayValue}`;
});

// Equals function
function equals() {
    if (firstNumber && operator) {
        secondNumber = displayValue;
        displayValue = operate(firstNumber, secondNumber, operator);
    
        // If divide by zero
        if (displayValue === Infinity) {
            display.textContent = "nice try ;)";
            clear();
        } else {
            display.textContent = `${displayValue}`;
        }

        operator = undefined;
    }
};

// Equals button
const btnEquals = document.querySelector("#equals");
btnEquals.onclick = () => equals();


// Operator buttons
function opFunction(string) {
    equals();
    firstNumber = displayValue;
    displayValue = 0;
    operator = string;
}

const btnAdd = document.querySelector("#add");
btnAdd.onclick = () => opFunction("add");

const btnSubtract = document.querySelector("#subtract");
btnSubtract.onclick = () => opFunction("subtract");

const btnMultiply = document.querySelector("#multiply");
btnMultiply.onclick = () => opFunction("multiply");

const btnDivide = document.querySelector("#divide");
btnDivide.onclick = () => opFunction("divide");

/*
To do:
    1. Add functionality to other buttons
    2. CSS
    3. Keyboard support?
*/