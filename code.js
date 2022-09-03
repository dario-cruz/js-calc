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
// compuView.innerHTML = " "

// Number window on calc 
const compuView = document.getElementById("compuview")

function addText(text) {
    compuView.innerHTML += text;
}
function clearText() {
    compuView.innerHTML = "";
}

zeroButton.addEventListener("click", () => addText("0"));
oneButton.addEventListener("click", () => addText("1"));
twoButton.addEventListener("click", () => addText("2"));
threeButton.addEventListener("click", () => addText("3"));
fourButton.addEventListener("click", () => addText("4"));
fiveButton.addEventListener("click", () => addText("5"));
sixButton.addEventListener("click", () => addText("6"));
sevenButton.addEventListener("click", () => addText("7"));
eightButton.addEventListener("click", () => addText("8"));
nineButton.addEventListener("click", () => addText("9"));

clearButton.addEventListener("click", () => clearText());

multiplyButton.addEventListener("click", () => addText("*"));
divideButton.addEventListener("click", () => addText("/"));
additionButton.addEventListener("click", () => addText("+"));
subtractButton.addEventListener("click", () => addText("-"));
equalButton.addEventListener("click", () => processComputation());


//String parsing into array for evaluation. 
function processComputation() {
    let evalArray = compuView.innerText.split('');
    switch (evalArray[1]) {
        case "+":
            compuView.innerHTML = Number(evalArray[0]) + Number(evalArray[2]);
        case "-":
            compuView.innerHTML = Number(evalArray[0]) - Number(evalArray[2]);
        case "*":
            compuView.innerHTML = Number(evalArray[0]) * Number(evalArray[2]);
        case "/":
            compuView.innerHTML = Number(evalArray[0]) / Number(evalArray[2]);
    }
}