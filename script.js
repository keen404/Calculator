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

digitBtns.forEach(function(btn) {
    btn.addEventListener('click', () => {
        displayDiv.textContent += btn.textContent;
    })
})

let firstNumber = 0;
let operate = '';
const operatorBtns = document.querySelectorAll('.operator');
operatorBtns.forEach(function(btn) {
    btn.addEventListener('click', () => {
        firstNumber = displayDiv.textContent;
        operate = btn.textContent;
        displayDiv.textContent = '';
    })
})

const equalBtn = document.querySelector('#operate');
equalBtn.addEventListener('click', () => {
    switch (operate) {
        case '+':
            displayDiv.textContent = add(firstNumber, displayDiv.textContent);
            break
        case '-':
            displayDiv.textContent = subtract(firstNumber, displayDiv.textContent);
            break;
        case 'x':
            displayDiv.textContent = multiply([firstNumber, displayDiv.textContent]);
            break;
        case '%':
            displayDiv.textContent = divide(firstNumber, displayDiv.textContent);
            break;
    }
    
})