// Defining all buttons
const clearButton = document.getElementById("C")
const divideButton = document.getElementById("divide")
const multiplyButton = document.getElementById("multiply")
const subtractButton = document.getElementById("subtract")
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
const resultView = document.getElementById("resultview")
const inputView = document.getElementById("inputview")

// Eventlistners for buttons
zeroButton.addEventListener("click", () => addValues("0"));
oneButton.addEventListener("click", () => addValues("1"));
twoButton.addEventListener("click", () => addValues("2"));
threeButton.addEventListener("click", () => addValues("3"));
fourButton.addEventListener("click", () => addValues("4"));
fiveButton.addEventListener("click", () => addValues("5"));
sixButton.addEventListener("click", () => addValues("6"));
sevenButton.addEventListener("click", () => addValues("7"));
eightButton.addEventListener("click", () => addValues("8"));
nineButton.addEventListener("click", () => addValues("9"));

clearButton.addEventListener("click", () => clearText());

multiplyButton.addEventListener("click", () => addOperator("*"));
divideButton.addEventListener("click", () => addOperator("/"));
additionButton.addEventListener("click", () => addOperator("+"));
subtractButton.addEventListener("click", () => addOperator("-"));

equalButton.addEventListener("click", () => advComputation());

//Computation array. 
let compuArray = []

// Add Numbers to dom on button press.
function addValues(text) {
    inputView.innerText += text;
    // compuArray.push(Number(text));
}

//Clear input, addValues to resultView, add numbers and operator to array. 
function addOperator(input) {
    //add value in element to compuArray.
    compuArray.push(Number(inputView.innerText));
    compuArray.push(input);
    //add value to result dom element.
    let inputText = document.createTextNode(inputView.innerText + " ");
    let inputOperator = document.createTextNode(input + " ");
    resultView.appendChild(inputText);
    resultView.appendChild(inputOperator);
    //Clear input dom element.
    inputView.innerText = "";
}

//Clear text on button press.
function clearText() {
    inputView.innerText = "";
    resultView.innerText = "";
    compuArray = [];
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

function advComputation() {
    compuArray.push(Number(inputView.innerText));
    let inputText = document.createTextNode(inputView.innerText + " ");
    resultView.appendChild(inputText);
    inputView.innerText = "";

    switch (compuArray[1]) {
        case "+":
            return resultView.innerText = compuArray[0] + compuArray[2];
        case "-":
            return resultView.innerText = compuArray[0] - compuArray[2];
        case "*":
            return resultView.innerText = compuArray[0] * compuArray[2];
        case "/":
            return resultView.innerText = compuArray[0] / compuArray[2];
              
    }
}