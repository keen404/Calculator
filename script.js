
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
let seccondRecordNumber = '';

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
        console.log(`the FirstReccordNumber: ${firstReccordNumber}`);
        console.log(`the Text: ${text}`);
        console.log(`the Result: ${result}`);
        console.log(`The Display: ${display.textContent}`)
        console.log(`the FirstNumberExist: ${firstNumberExist}`);
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
            console.log(`the FirstReccordNumber: ${firstReccordNumber}`);
            console.log(`the Text: ${text}`);
            console.log(`the Result: ${result}`);
            console.log(`The Display: ${display.textContent}`)
            console.log(`the FirstNumberExist: ${firstNumberExist}`);

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
                console.log(`the FirstReccordNumber: ${firstReccordNumber}`);
                console.log(`the Text: ${text}`);
                console.log(`the Result: ${result}`);
                console.log(`The Display: ${display.textContent}`)
                console.log(`the FirstNumberExist: ${firstNumberExist}`);

            }
            else if (operator === '-') {
                operator = operatorBtn.textContent;
                result = +firstReccordNumber - +text.join('');
                display.textContent = +result.toFixed(5);
                firstReccordNumber = '';
                firstNumberExist = true;
                text = [];
                text.push(result);
                console.log(`the FirstReccordNumber: ${firstReccordNumber}`);
                console.log(`the Text: ${text}`);
                console.log(`the Result: ${result}`);
                console.log(`The Display: ${display.textContent}`)
                console.log(`the FirstNumberExist: ${firstNumberExist}`);

            }
            else if (operator === 'x') {
                operator = operatorBtn.textContent;
                result = +firstReccordNumber * +text.join('');
                display.textContent = +result.toFixed(5);
                firstReccordNumber = '';
                firstNumberExist = true;
                text = [];
                text.push(result);
                console.log(`the FirstReccordNumber: ${firstReccordNumber}`);
                console.log(`the Text: ${text}`);
                console.log(`the Result: ${result}`);
                console.log(`The Display: ${display.textContent}`)
                console.log(`the FirstNumberExist: ${firstNumberExist}`);

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
                console.log(`the FirstReccordNumber: ${firstReccordNumber}`);
                console.log(`the Text: ${text}`);
                console.log(`the Result: ${result}`);
                console.log(`The Display: ${display.textContent}`)
                console.log(`the FirstNumberExist: ${firstNumberExist}`);

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
        console.log(`the FirstReccordNumber: ${firstReccordNumber}`);
        console.log(`the Text: ${text}`);
        console.log(`the Result: ${result}`);
        console.log(`The Display: ${display.textContent}`)
        console.log(`the FirstNumberExist: ${firstNumberExist}`);

    }
    else if (operator === '-') {
        result = +firstReccordNumber - +text.join('');
        display.textContent = +result.toFixed(5);
        firstReccordNumber = "";
        text = [];
        text.push(result);
        console.log(`the FirstReccordNumber: ${firstReccordNumber}`);
        console.log(`the Text: ${text}`);
        console.log(`the Result: ${result}`);
        console.log(`The Display: ${display.textContent}`)
        console.log(`the FirstNumberExist: ${firstNumberExist}`);

    }
    else if (operator === 'x') {
        result = +firstReccordNumber * +text.join('');
        display.textContent = +result.toFixed(5);
        firstReccordNumber = "";
        text = [];
        text.push(result);
        console.log(`the FirstReccordNumber: ${firstReccordNumber}`);
        console.log(`the Text: ${text}`);
        console.log(`the Result: ${result}`);
        console.log(`The Display: ${display.textContent}`)
        console.log(`the FirstNumberExist: ${firstNumberExist}`);

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
        console.log(`the FirstReccordNumber: ${firstReccordNumber}`);
        console.log(`the Text: ${text}`);
        console.log(`the Result: ${result}`);
        console.log(`The Display: ${display.textContent}`)
        console.log(`the FirstNumberExist: ${firstNumberExist}`);

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