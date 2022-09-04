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

// Eventlistners for buttons
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

// Add text to dom on button press.
function addText(text) {
    compuView.innerText += text;
}
function clearText() {
    compuView.innerText = "";
}

//String parsing into array for evaluation. 
function processComputation() {
    let evalArray = compuView.innerText.split('');
    // console.log(evalArray)
    // console.log(Number(evalArray[0]) + Number(evalArray[2]))
    let evalResult

    switch (evalArray[1]) {
        case "+":
            evalResult = Number(evalArray[0]) + Number(evalArray[2]);
            compuView.innerText = String(evalResult);
        case "-":
            compuView.innerText = Number(evalArray[0]) - Number(evalArray[2]);
        case "*":
            compuView.innerText = Number(evalArray[0]) * Number(evalArray[2]);
        case "/":
            compuView.innerText = Number(evalArray[0]) / Number(evalArray[2]);
    }
}

