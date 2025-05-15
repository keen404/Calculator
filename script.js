const add = function(a, b) {
    return +a + +b;;
  };

const subtract = function(a, b) {
    return +a - +b;
};

const multiply = function(arr) {
    return arr.reduce((accumulator, value) => accumulator * +value);
};

const divide = function(a, b) {
    return +a / +b
}


const displayDiv = document.querySelector('.display');
const digitBtns = document.querySelectorAll('.digit');
let clearDisplay = false;
let dividedByZero = false;

digitBtns.forEach(function(btn) {
    btn.addEventListener('click', () => {
        if (clearDisplay) {
            displayDiv.textContent = '';
            clearDisplay = false
        }
        if (dividedByZero) {
            firstNumber = 0;
            operator = '';
            displayDiv.textContent = '';
            dividedByZero = false;
        }
        displayDiv.textContent += btn.textContent;
    })
})

let firstNumber = 0;
let operator = '';
const operatorBtns = document.querySelectorAll('.operator');
operatorBtns.forEach(function(btn) {
    btn.addEventListener('click', () => {
        if (!operator) {
            firstNumber = displayDiv.textContent;
            operator = btn.textContent;
            clearDisplay = true;
        }
        else {
            switch (operator) {
                case operator:
                    if (operator === '%' && displayDiv.textContent === '0') {
                        displayDiv.textContent = "Idiot!! can't divied by 0";
                        dividedByZero = true;
                        break;
                    }
                case '+':
                    displayDiv.textContent = parseFloat(add(firstNumber, displayDiv.textContent).toFixed(9));
                    firstNumber = displayDiv.textContent;
                    operator = btn.textContent;
                    clearDisplay = true;
                    break;
                case '-':
                    displayDiv.textContent = parseFloat(subtract(firstNumber, displayDiv.textContent).toFixed(9));
                    firstNumber = displayDiv.textContent;
                    operator = btn.textContent;
                    clearDisplay = true;
                    break;
                case 'x':
                    displayDiv.textContent = parseFloat(multiply([firstNumber, displayDiv.textContent]).toFixed(9));
                    firstNumber = displayDiv.textContent;
                    operator = btn.textContent;
                    clearDisplay = true;
                    break;
                case '%':
                    displayDiv.textContent = parseFloat(divide(firstNumber, displayDiv.textContent).toFixed(9));
                    firstNumber = displayDiv.textContent;
                    operator = btn.textContent;
                    clearDisplay = true;
                    break;
            }
        }
    })
})

function operate() {
    switch (operator) {
        case '+':
            displayDiv.textContent = parseFloat(add(firstNumber, displayDiv.textContent).toFixed(9));
            firstNumber = 0;
            operator = '';  
            break
        case '-':
            displayDiv.textContent = parseFloat(subtract(firstNumber, displayDiv.textContent).toFixed(9));
            firstNumber = 0;
            operator = '';
            break;
        case 'x':
            displayDiv.textContent = parseFloat(multiply([firstNumber, displayDiv.textContent]).toFixed(9));
            firstNumber = 0;
            operator = '';
            break;
        case '%':
            if (displayDiv.textContent === '0') {
                displayDiv.textContent = "Idiot!! can't divied by 0";
                dividedByZero = true;
                break
            }
            displayDiv.textContent = parseFloat(divide(firstNumber, displayDiv.textContent).toFixed(9));
            firstNumber = 0;
            operator = '';
            break;
    }
}
const equalBtn = document.querySelector('#operate');
equalBtn.addEventListener('click', operate);

function clear() {
    clearDisplay = false;
    firstNumber = 0;
    operator = '';
    displayDiv.textContent = '';
}
const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', clear)
