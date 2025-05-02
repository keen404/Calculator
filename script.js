
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

let firstNum = 0;
let secocndNum = 0;
let text = [];

let btns = document.querySelectorAll(".digit")
let display = document.querySelector(".display"); 
btns.forEach((digit) => {
    digit.addEventListener("click", () => {
        text.push(digit.textContent);
        display.textContent = text.join("");
    })
})

let operatorsBtn = document.querySelectorAll(".operator");
let operator = '';

let firsrReccordNumber = '';
operatorsBtn.forEach((operatorBtn) => {
    operatorBtn.addEventListener("click", () => {
        operator = operatorBtn.textContent;
        firsrReccordNumber = text.join("");
        display.textContent = '';
        text = [];
        console.log(firsrReccordNumber+operator);
    })
})

let equalBtn = document.querySelector("#operate");
equalBtn.addEventListener(('click'), operate);

function operate() {
    if (operator === '+') {
        display.textContent = +firsrReccordNumber + +text.join('');
    }
    else if (operator === '-') {
        display.textContent = +firsrReccordNumber - +text.join('');
    }
    else if (operator === 'x') {
        display.textContent = +firsrReccordNumber * +text.join('');
    }
    else if (operator === '%') {
        display.textContent = +firsrReccordNumber / +text.join('');
    }
}