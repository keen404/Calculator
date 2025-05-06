
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

let text = [];
let firstNumberExist = false;
let firstReccordNumber = '';

let btns = document.querySelectorAll(".digit")
let display = document.querySelector(".display"); 
btns.forEach((digit) => {
    digit.addEventListener("click", () => {
        if (firstNumberExist){
            display.textContent = '';
            text = [];
        }
        text.push(digit.textContent);
        display.textContent = text.join("");
        firstNumberExist = false;
    })
})

let operatorsBtn = document.querySelectorAll(".operator");
let operator = '';

let result = 0;

operatorsBtn.forEach((operatorBtn) => {
    operatorBtn.addEventListener("click", () => {
        if (!firstReccordNumber) {
            operator = operatorBtn.textContent;
            firstReccordNumber = text.join("");
            text = [];
            firstNumberExist = true;

        }
        else if (firstReccordNumber){
            if (operator === '+') {
                operator = operatorBtn.textContent;
                result = +firstReccordNumber + +text.join('');
                if (!text.join('')) {
                    return
                 }
                display.textContent = +result.toFixed(5);
                firstReccordNumber = '';
                firstNumberExist = true;
                text = [];
                text.push(result);

            }
            else if (operator === '-') {
                operator = operatorBtn.textContent;
                result = +firstReccordNumber - +text.join('');
                display.textContent = +result.toFixed(5);
                firstReccordNumber = '';
                firstNumberExist = true;
                text = [];
                text.push(result);

            }
            else if (operator === 'x') {
                operator = operatorBtn.textContent;
                result = +firstReccordNumber * +text.join('');
                display.textContent = +result.toFixed(5);
                firstReccordNumber = '';
                firstNumberExist = true;
                text = [];
                text.push(result);

            }
            else if (operator === '%') {
                operator = operatorBtn.textContent;
                result = +firstReccordNumber / +text.join('');
                display.textContent = +result.toFixed(5);
                if(result === Infinity){
                    display.textContent = "Can't divided by 0";
                    text = [];
                    result = 0;
                    firstReccordNumber = '';
                }
                firstReccordNumber = '';
                firstNumberExist = true;
                text = [];
                text.push(result);

            }
        }
    })
})

let equalBtn = document.querySelector("#operate");
equalBtn.addEventListener(('click'), operate);


function operate() {
    if (operator === '+') {
        result = +firstReccordNumber + +text.join('');
        display.textContent = +result.toFixed(5);
        firstReccordNumber = "";
        text = [];
        text.push(result);

    }
    else if (operator === '-') {
        result = +firstReccordNumber - +text.join('');
        display.textContent = +result.toFixed(5);
        firstReccordNumber = "";
        text = [];
        text.push(result);

    }
    else if (operator === 'x') {
        result = +firstReccordNumber * +text.join('');
        display.textContent = +result.toFixed(5);
        firstReccordNumber = "";
        text = [];
        text.push(result);

    }
    else if (operator === '%') {
        result = +firstReccordNumber / +text.join('');
        display.textContent = +result.toFixed(5);
        if(result === Infinity){
            display.textContent = "Can't divided by 0";
            text = [];
            result = 0;
            firstReccordNumber = '';
            return;
        }
        firstReccordNumber = "";
        text = [];
        text.push(result);

    }
}


let clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clear);

function clear() {
    firstNumberExist = false;
    text = [];
    firstReccordNumber = '';
    display.textContent = '';
}