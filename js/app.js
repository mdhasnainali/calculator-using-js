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

let findPressedButton = function (e) {
    operationAndRegularButtonPressed(e.target.getAttribute('value'));
}

let operationAndRegularButtonPressed = function (button) {
    if (isCalculated == true) {
        isCalculated = false;
        equation.innerText = 0;
    }
    if (equation.innerText == '0') equation.innerText = button;
    else if (equation.innerText.length < 10) equation.innerText += button;
    console.log(button);
};

let clearButtonPressed = function (e) {
    equation.innerText = 0;
    result.innerText = 0;
}

let backspaceButtonPressed = function () {
    equation.innerText = equation.innerText.substring(0, equation.innerText.length - 1);
    if (equation.innerText.length == 0) equation.innerText = 0;
}

let isKeyPressed = function (e) {
    let keys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", "%", "."];

    if (keys.includes(e.key)) operationAndRegularButtonPressed(e.key);
    else if (e.key == 'Enter') calculationDone();
    else if (e.key == 'Backspace') backspaceButtonPressed();
    console.log(e.key);
}

document.addEventListener('keyup', isKeyPressed);

operationButton.forEach((button) => {
    button.addEventListener('click', findPressedButton);
});

regularButton.forEach((button) => {
    button.addEventListener('click', findPressedButton);
});

specialButton.addEventListener('click', calculationDone);

clearButton.addEventListener('click', clearButtonPressed);

backspaceButton.addEventListener('click', backspaceButtonPressed);