// Step 1
function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

// Step 2
let n1;
let operator;
let n2;

// Step 3
function operate(n1, operation, n2) {
    switch (operation) {
        case "add":
            return add(n1, n2);
        case "subtract":
            return subtract(n1, n2);
        case "multiply":
            return multiply(n1, n2);
        case "divide":
            return divide(n1, n2);
    }
}
