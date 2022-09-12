// Defining all buttons
const clearButton = document.getElementById("C")
const bspaceButton = document.getElementById("bspace")
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
bspaceButton.addEventListener("click", () => removeValues());

multiplyButton.addEventListener("click", () => addOperator("*"));
divideButton.addEventListener("click", () => addOperator("/"));
additionButton.addEventListener("click", () => addOperator("+"));
subtractButton.addEventListener("click", () => addOperator("-"));

equalButton.addEventListener("click", () => advComputation());

//Computation array. 
let compuArray = []

// Indicator of calculation.
let calcHappened = false

// Add Numbers to dom on button press.
function addValues(text) {
    if (calcHappened == true && compuArray[1] == undefined) {
        compuArray = [];
        resultView.innerText = "";
    }
    calcHappened = false
    inputView.innerText += text;
    // compuArray.push(Number(text));
}

//backspace functionality
function removeValues() {
    inputView.innerText = inputView.innerText.slice(0,-1);
}


//Clear input, addValues to resultView, add numbers and operator to array. 
function addOperator(input) {
    //add value in element to compuArray.
    if (inputView.innerText !== "") {
        compuArray.push(Number(inputView.innerText));
    }
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
    calcHappened = false;
}

                
//String parsing into array for evaluation. 
function advComputation() {
    calcHappened = true;
    if (inputView.innerText !== "") {
        compuArray.push(Number(inputView.innerText));
    }

    let inputText = document.createTextNode(inputView.innerText + " ");
    resultView.appendChild(inputText);
    inputView.innerText = "";
    let calResult = ""
    if (compuArray[1] !== "") {
        switch (compuArray[1]) {
            case "+":
                calResult = resultView.innerText = compuArray[0] + compuArray[2];
                compuArray = [calResult];
                return calResult;
            case "-":
                calResult = resultView.innerText = compuArray[0] - compuArray[2];
                compuArray = [calResult];
                return calResult;
            case "*":
                calResult = resultView.innerText = compuArray[0] * compuArray[2];
                compuArray = [calResult];
                return calResult;
            case "/":
                calResult = resultView.innerText = compuArray[0] / compuArray[2];
                compuArray = [calResult];
                return calResult;
        }
    }
}