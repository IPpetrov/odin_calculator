const result = document.getElementById("calc-output")
const calculationField = document.getElementById("calculation")
const numberButtons = document.querySelectorAll(".numbers")
let currNumber = ""


// Run all functions 
function main() {
    selectNumber()
}

main()

// Create a number
function selectNumber() {
    numberButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            currNumber += button.value
            calculationField.innerHTML = currNumber
          })
    })
}