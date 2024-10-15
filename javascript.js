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

const numButton = document.querySelectorAll(".numberButton");
numButton.forEach((button) => {
    button.addEventListener("click", () => {
        numberButton(button.textContent);
    })
});


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

const opButton = document.querySelectorAll(".operatorButton");
opButton.forEach((button) => {
    button.addEventListener("click", () => {
        operatorButton(button.id);
    })
});


/*
To do:
    2. CSS
    3. Keyboard support?
*/