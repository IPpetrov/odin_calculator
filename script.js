const calcResult = document.getElementById("calc-output")
const calcField = document.getElementById("calculation")
const numButtons = document.querySelectorAll(".numbers")
const operatorButtons = document.querySelectorAll(".operator")
const clearAllButton = document.querySelector(".clear-all")
const clearOneButton = document.querySelector(".clear-entry")
const equalsButton = document.querySelector(".equals")
const dotButton = document.querySelector(".dot")
let currNum = ""
let nextNum = ""
let operator = ""
let result = ""

clearAllButton.addEventListener("click", (e) => clearAll())
equalsButton.addEventListener("click", (e) => equals())
clearOneButton.addEventListener("click", (e) => clearLast())

// Adding float numbers
dotButton.addEventListener("click", (e) => {
    if (operator == "" && !currNum.includes(".")) {
        if (currNum == "") {
            currNum += "0."
        } else {
            currNum += "."
        }
    } else if (operator != "" && !nextNum.includes(".")) {
        if (nextNum == "") {
            nextNum += "0."
        } else {
            nextNum += "."
        }
    }
    updateDisplay()
})

// Select numbers
numButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        equalsButton.removeAttribute('disabled', '')
        if (operator == "") {
            currNum == "0" ? currNum = button.textContent : currNum += button.textContent
        } else {
            nextNum == "0" ? nextNum = button.textContent : nextNum += button.textContent
        }
        updateDisplay()
    })
})

// Select operator
operatorButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        equalsButton.removeAttribute('disabled', '')
        if (currNum != "" && nextNum != "") {
            equals()
        }
        operator = button.textContent
        updateDisplay()
    })
})

// Update calculation display
function updateDisplay() {
    calcField.textContent = currNum + " " + operator + " " + nextNum
    if (result != "") calcResult.textContent = result
}

// Clear all fields 
function clearAll() {
    currNum = ""
    nextNum = ""
    operator = ""
    nextOperator = ""
    result = ""
    calcField.textContent = ""
    calcResult.textContent = "0"
}

// Clear last entry
function clearLast() {
    operator == "" ? currNum = currNum.slice(0, -1) : nextNum = nextNum.slice(0, -1)
    updateDisplay()
}

// Operations
function operate(operator, a, b) {
    switch(operator) {
        case "+":
            return parseFloat(a) + parseFloat(b)
            break
        case "-":
            return parseFloat(a) - parseFloat(b)
            break
        case "*":
            return parseFloat(a) * parseFloat(b)
            break
        case "/":
            if (a == 0 || b == 0) return "dividing by 0.."
            return parseFloat(a) / parseFloat(b)
            return 
            break
        case "%":
            return parseFloat(a) % parseFloat(b)
            break
    }
}

// Do the equation and print result
function equals() {
    if (currNum != "" && nextNum != "" && operator != "") {
        result = operate(operator, currNum, nextNum)
        result = !isInt(result) ? result.toFixed(2) : parseInt(result)
        equalsButton.setAttribute('disabled', '')
        updateDisplay()
        currNum = result
        nextNum = ""
    }
}

// Check is number is int/float
function isInt(n) {
    return n % 1 === 0;
 }
