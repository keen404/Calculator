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


const displayDiv = document.querySelector(".display");
const digitBtns = document.querySelectorAll(".digit");
digitBtns.forEach(function(btn) {
    btn.addEventListener("click", () => {
        displayDiv.textContent += btn.textContent;
    })
})

// When press operator button 
// Hold Current button
// Empty the displaying text
