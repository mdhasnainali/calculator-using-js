const equation = document.querySelector('.equation');
const result = document.querySelector('.result');
let Ans = 0;
let isCalculated = false;

let operationButton = document.querySelectorAll('.operation-btn');
let specialButton = document.querySelector('.special-btn');
let regularButton = document.querySelectorAll('.regular-btn');
let clearButton = document.querySelector('#clr-btn');
let backspaceButton = document.querySelector('#backspace-btn');

let calculationDone = function () {
    let currentAns;
    try {
        currentAns = eval(equation.innerText);
        Ans = currentAns;
        result.innerText = '=' + currentAns.toLocaleString("en-US");
        console.log("Equal Pressed: " + currentAns);
        isCalculated = true;
    }
    catch (err) {
        result.innerText = 0;
        alert("Please Provide Correct Input");
    }

};

let operationAndRegularButtonPressed = function (e) {
    if (isCalculated == true) {
        isCalculated = false;
        equation.innerText = 0;
    }
    if (equation.innerText == '0') equation.innerText = e.target.getAttribute('value');
    else if (equation.innerText.length < 10) equation.innerText += e.target.getAttribute('value');
    console.log(e.target.getAttribute('value'));
};

let clearButtonPressed = function (e) {
    equation.innerText = 0;
    result.innerText = 0;
}

let backspaceButtonPressed = function () {
    equation.innerText = equation.innerText.substring(0, equation.innerText.length - 1);
    if (equation.innerText.length == 0) equation.innerText = 0;
}

operationButton.forEach((button) => {
    button.addEventListener('click', operationAndRegularButtonPressed);
});

regularButton.forEach((button) => {
    button.addEventListener('click', operationAndRegularButtonPressed);
});

specialButton.addEventListener('click', calculationDone);

clearButton.addEventListener('click', clearButtonPressed);

backspaceButton.addEventListener('click', backspaceButtonPressed);