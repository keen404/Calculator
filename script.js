
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
let operlator = '';

let btns = document.querySelectorAll(".digit")
let display = document.querySelector(".display");
console.log(btns);
btns.forEach((elem) => {
    elem.addEventListener("click", () => {
        operlator = elem.textContent;
        display.textContent += operlator;
    })
})