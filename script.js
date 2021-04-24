//create simple arithmetic functions taking in two numbers
const add = (num1, num2) => {
    display.textContent = (Number(num1) + Number(num2)).toFixed(3);
}
const subtract = (num1, num2) => {
    display.textContent = (num1 - num2).toFixed(3);
}
const multiply = (num1, num2) => {
    display.textContent = (num1 * num2).toFixed(3);
}
const divide = (num1, num2) => {
    if (num2 === '0'){
        alert('Divide by zero!');
    }
    else {
        display.textContent = (num1 / num2).toFixed(3);
    }
}
//function to call previous arithmetic functions
const operate = (operator, num1, num2) => {
    operator(num1, num2);
}
//create function to populate calculator display when a button(number) is clicked
const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.num');

const updateDisplay = (number) => {
    if (display.textContent === '0' || resetScreen) {
        display.textContent = number;
        resetScreen = false;
    }
    else {
        display.textContent += number;
    }
    numberClicked = true;
}
//add event listeners to each number-button
numberButtons.forEach(numberButton => 
    numberButton.addEventListener('click', () => updateDisplay(numberButton.textContent))
);
//add event listeners to clear and delete key
document.querySelector('.clear').addEventListener('click', () => {
    location.reload();
})

document.querySelector('.delete').addEventListener('click', () => {
    display.textContent = display.textContent.toString().slice(0, -1);
})
//create function to store number when an operator has been clicked
const operatorButtons = document.querySelectorAll('.operator');
let operatorChoice 
let numberChoice
let resetScreen
let numberClicked = false;
let operatorClicked = false;
operatorButtons.forEach(operatorButton => 
    operatorButton.addEventListener('click', () => {
        if (operatorClicked) {
            answer();
        }
        operatorChoice = operatorButton.textContent;
        numberChoice = display.textContent;
        resetScreen = true;
        operatorClicked = true;
        console.log(operatorChoice);
        console.log(numberChoice);
    })
);

//create function to call operate when equals key is clicked

const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', () => answer())

const answer = () => {
    if (numberClicked) {
        switch(operatorChoice) {
            case "+":
                operate(add, numberChoice, display.textContent);
                break;
            case "-":
                operate(subtract, numberChoice, display.textContent);
                break;
            case "x":
                operate(multiply, numberChoice, display.textContent);
                break;
            case "/":
                operate(divide, numberChoice, display.textContent);
                break;
        }
        numberClicked = false;
    }    
}