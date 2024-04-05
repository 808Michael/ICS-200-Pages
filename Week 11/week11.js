let firstOperand = '';
let secondOperand = '';
let operator = '';
let result = '';

const display = document.getElementById('result');

function handleNumberClick(number) {
    if (operator === '') {
        firstOperand += number;
        display.textContent = firstOperand;
    } else {
        secondOperand += number;
        display.textContent = secondOperand;
    }
}

function handleOperatorClick(op) {
    if (operator !== '' && secondOperand !== '') {
        operate();
    }
    operator = op;
}

function operate() {
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                result = 'Error: Division by zero';
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = '';
    }

    display.textContent = result;

    firstOperand = result.toString();
    secondOperand = '';
    operator = '';
}

function clear() {
    firstOperand = '';
    secondOperand = '';
    operator = '';
    result = '';
    display.textContent = '0';
}

function calculatePercentage() {
    if (operator === '') {
        result = parseFloat(firstOperand) / 100;
        display.textContent = result;
        firstOperand = result.toString();
    } else {
        result = parseFloat(secondOperand) / 100;
        display.textContent = result;
        secondOperand = result.toString();
    }
}

function togglePositiveNegative() {
    if (operator === '') {
        firstOperand = (-parseFloat(firstOperand)).toString();
        display.textContent = firstOperand;
    } else {
        secondOperand = (-parseFloat(secondOperand)).toString();
        display.textContent = secondOperand;
    }
}

const numberButtons = document.querySelectorAll('.teal-bg');
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        handleNumberClick(button.textContent);
    });
});

const operatorButtons = document.querySelectorAll('.orange-bg');
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        handleOperatorClick(button.textContent);
    });
});

document.getElementById('equals').addEventListener('click', () => {
    if (operator !== '' && secondOperand !== '') {
        operate();
    }
});

document.getElementById('ac').addEventListener('click', clear);

document.getElementById('percent').addEventListener('click', calculatePercentage);

document.getElementById('plus-minus').addEventListener('click', togglePositiveNegative);
