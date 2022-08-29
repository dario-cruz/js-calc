// Defining all buttons
const clearButton = document.getElementById("C")
const divideButton = document.getElementById("divide")
const multiplyButton = document.getElementById("divide")
const subtractButton = document.getElementById("multiply")
const additionButton = document.getElementById("addition")
const equalButton = document.getElementById("equal")
const oneButton = document.getElementById("one")
const twoButton = document.getElementById("two")
const threeButton = document.getElementById("three")
const fourButton = document.getElementById("four")
const fiveButton = document.getElementById("five")
const sixButton = document.getElementById("six")
const sevenButton = document.getElementById("seven")
const eightButton = document.getElementById("eight")
const nineButton = document.getElementById("nine")
const zeroButton = document.getElementById("zero")

// Number window on calc 
const compuView = document.getElementById("compuview")

function addText(text) {
    compuView.innerHTML += text;
}

zeroButton.addEventListener("click", addText("0"));