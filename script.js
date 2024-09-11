const calcResult = document.getElementById("calc-output")
const calcField = document.getElementById("calculation")
const numButtons = document.querySelectorAll(".numbers")
const operatorButtons = document.querySelectorAll(".operator")
const clearAllButton = document.querySelector(".clear-all")
const clearOneButton = document.querySelector(".clear-entry")
const equalsButton = document.getElementById("equals")
const dotButton = document.querySelector(".decimal")
let currNum = ""
let nextNum = ""
let operator = ""
let result = ""

clearAllButton.addEventListener("click", (e) => clearAll())
equalsButton.addEventListener("click", (e) => equals())
clearOneButton.addEventListener("click", (e) => clearLast())

// Select numbers
numButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (operator === "") {
            currNum === "0" ? currNum = button.textContent : currNum += button.textContent
        } else {
            nextNum === "0" ? nextNum = button.textContent : nextNum += button.textContent
        }
        updateDisplay()
    })
})

// Select operator
operatorButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (currNum !== "") {
            if (currNum !== "" && nextNum !== "") {
                equals()
            }
            operator = button.textContent
            updateDisplay()
        }
    })
})

// Update calculation display
function updateDisplay() {
    calcField.textContent = currNum + " " + operator + " " + nextNum
    if (result !== "") calcResult.textContent = result
}

// Clear all fields 
function clearAll() {
    currNum = ""
    nextNum = ""
    operator = ""
    result = ""
    calcField.textContent = ""
    calcResult.textContent = "0"
}

// Clear last entry
function clearLast() {
    operator === "" ? currNum = currNum.slice(0, -1) : nextNum = nextNum.slice(0, -1)
    updateDisplay()
}

// Operations
function operate(operator, a, b) {
    switch(operator) {
        case "+":
            return parseFloat(a) + parseFloat(b)
        case "-":
            return parseFloat(a) - parseFloat(b)
        case "*":
            return parseFloat(a) * parseFloat(b)
        case "/":
            if (a == 0 || b == 0)  return "You can't divide by 0.."  
            return parseFloat(a) / parseFloat(b)
        case "%":
            return parseFloat(a) % parseFloat(b)
    }
}

// Do the equation and print result
function equals() {
    if (currNum !== "" && nextNum !== "" && operator !== "") {
        result = operate(operator, currNum, nextNum)
        if (typeof result === "string") {
            calcResult.style.fontSize = "2rem";
            updateDisplay()
            setTimeout(() => {
            clearAll()
            calcResult.style.fontSize = "3rem"      
            }, 3000)
            
        }
        else {
            result = !isInt(result) ? result.toFixed(2) : parseInt(result)
            updateDisplay()
            currNum = result
            nextNum = ""
        }
    }
}

// Adding float numbers
dotButton.addEventListener("click", (e) => {
    if (operator === "" && !currNum.includes(".")) {
        if (currNum === "") {
            currNum += "0."
        } else {
            currNum += "."
        }
    } else if (operator !== "" && !nextNum.includes(".")) {
        if (nextNum === "") {
            nextNum += "0."
        } else {
            nextNum += "."
        }
    }
    updateDisplay()
})

// Check is number is int/float
function isInt(n) {
    return n % 1 === 0;
 }

 // Adding keyboard compatibility 

 window.onkeydown = function(e){
    let x = e.key;
    let choice
    switch(x){
        case '1':
            choice = document.querySelector('#one');
            choice.click();
            break;
        case '2':
            choice = document.querySelector('#two');
            choice.click();
            break;
        case '3':
            choice = document.querySelector('#three');
            choice.click();
            break;
        case'4':
            choice = document.querySelector('#four');
            choice.click();
            break;
        case '5':
            choice = document.querySelector('#five');
            choice.click();
            break;
        case '6':
            choice = document.querySelector('#six');
            choice.click();
            break;
        case '7':
            choice = document.querySelector('#seven');
            choice.click();
            break;
        case '8':
            choice = document.querySelector('#eight');
            choice.click();
            break;
        case '9':
            choice = document.querySelector('#nine');
            choice.click();
            break;
        case '0':
            choice = document.querySelector('#zero');
            choice.click();
            break;
        case 'Escape':
            choice = document.querySelector('#clear-all');
            choice.click();
            break;
        case 'Backspace':
            choice = document.querySelector('#clear-entry');
            choice.click();
            break;
        case '/':
            choice = document.querySelector('#divide');
            choice.click();
            break;
        case '*':
            choice = document.querySelector('#multiply');
            choice.click();
            break;
        case '-':
            choice = document.querySelector('#subtract');
            choice.click();
            break;
        case '+':
            choice = document.querySelector('#add');
            choice.click();
            break;
        case '.':
            choice = document.querySelector('#decimal');
            choice.click();
            break;
        case 'Enter':
            choice = document.querySelector('#equals');
            choice.click();
            break;
        case '%':
            choice = document.querySelector('#modulus');
            choice.click();
            break;
    }
}
