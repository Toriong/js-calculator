

var clrButton = document.querySelector("#clear");
var negativeAndPositiveButton = document.querySelector("#positive-negative");
var negativeValue = negativeAndPositiveButton.value;
var percentageButton = document.querySelector("#percentage");
var percentageJs = percentageButton.value;
var divideButton = document.querySelector("#division")
var divide = divideButton.value;
var sevenButton = document.querySelector("#seven")
var numSeven = sevenButton.value;
var eightButton = document.querySelector("#eight")
var numEight = eightButton.value;
var nineButton = document.querySelector("#nine")
var numNine = nineButton.value;
var multipleButton = document.querySelector("#multiple")
var multiple = multipleButton.value;
var fourButton = document.querySelector("#four")
var numFour = fourButton.value;
var fiveButton = document.querySelector("#five")
var numFive = fiveButton.value;
var sixButton = document.querySelector("#six")
var numSix = sixButton.value;
var subtractionButton = document.querySelector("#minus")
var minus = subtractionButton.value
var oneButton = document.querySelector("#one");
var numOne = parseInt(oneButton.value);
var twoButton = document.querySelector("#two");
var numTwo = parseInt(twoButton.value);
var threeButton = document.querySelector("#three");
var numThree = threeButton.value;
var addButton = document.querySelector("#addition");
var plus = addButton.value;
var zeroButton = document.querySelector("#zero")
var numZero = zeroButton.value;
var decimalButton = document.querySelector("#decimal");
var decimal = decimalButton.value;
var equalsButton = document.querySelector("#equals")
var equalsSign = equalsButton.value;
var outPutScreen = document.querySelector(".output")
var numButton = document.querySelector(".num-button")


var numberObject = {
    numberEntry: [],
    equation: []
};

var mathSymbols = ["+", "-", "/", "*"]
var numbers = [0,1,2,3,4,5,6,7,8,9]



function checkIfNumberEntryIsEmpty() {
    if (numberObject.numberEntry.length === 0 && numberObject.equation.length == 1) {
        numberObject.equation.splice(0);
    }
}
function numberEntryDomManipulation(value) {
    return function () {
        checkIfNumberEntryIsEmpty();
        addZeroCheck();
        numberObject.numberEntry.push(Number(value));
        putNumberOntoDom();
    }
}

function numberEntryCheck() {
    var numberFound;
    console.log(numberObject.numberEntry);
    for (var index = 0; index < numberObject.numberEntry.length; index++){
        if (numberObject.numberEntry[index]== ".") {
            console.log("only a decimal is present.");
            numberFound = false;
            break;
        } else if (typeof numberObject.numberEntry[index] == "number") {
            console.log("a number")
            numberFound = true;
            break;
        } else if (numberObject.numberEntry[index] == "(" && numberObject.numberEntry[index] == "-" ) {
            console.log("continue loop")
        } 
    }
    return numberFound;
}
function addMathSymbol(symbol) {
    var numberCheck = numberEntryCheck();
    console.log(numberObject.numberEntry);
    console.log(numberCheck);
    if (numberObject.numberEntry.length > 0 && numberCheck){
        console.log("hellp")
        numberObject.equation.push(((numberObject.numberEntry.join(""))))
        numberObject.equation.push(symbol);
        checkForErrorsWhenArithmeticSignIsPressed();
        numberObject.numberEntry.splice(0);
    } else if (numberObject.numberEntry.length == 0 && numberObject.equation.length > 0) {
        console.log("wtf")
        numberObject.equation.push(symbol);
        checkForErrorsWhenArithmeticSignIsPressed();
    } else if (numberObject.numberEntry[0] == "." && !numberCheck) {
        console.log("yoyo")
        alert("enter in a number.")
    } else {
        console.log("really?")
    }
}
function equationArrayManipulation(symbol) {
    if (numberObject.numberEntry[0] == "-") {
        console.log("yo the heck?")
        putParenthese();
        addMathSymbol(symbol);
    } else if (numberObject.numberEntry[0] != "-") {
        console.log("not a negative number")
        addMathSymbol(symbol);
    }
}


function checkForErrorsWhenArithmeticSignIsPressed() {
    var lastElementCheck = mathSymbols.includes(numberObject.equation[numberObject.equation.length - 1]);
    var secondToLastElementCheck = mathSymbols.includes(numberObject.equation[numberObject.equation.length - 2]);
    if (lastElementCheck && secondToLastElementCheck) {
        console.log("delete");
        delete numberObject.equation[numberObject.equation.length - 2];
    } else if (numberObject.numberEntry[0] == ".") {
        alert("enter a number.")
    }
}


function arithmeticSymbolPressed(symbol) {
    return function () {
        if (numberObject.numberEntry.length > 0 && numberObject.numberEntry[0] !== "-") {
            console.log("i am working #1")
            equationArrayManipulation(symbol);
        } else if (numberObject.numberEntry.length == 0) {
            console.log("i am working #2")
            equationArrayManipulation(symbol);
        } else if (numberObject.numberEntry.length > 0 && numberObject.numberEntry[0] == "-") {
            // putParenthese();
            equationArrayManipulation(symbol);
            console.log(numberObject.equation);
        }
        // checkForErrorsWhenArithmeticSignIsPressed();
        console.log(numberObject.equation);
    }
}
function clearArrays() {
    numberObject.equation = [];
    numberObject.numberEntry = [];
    outPutScreen.innerHTML = "0";
}

function getAnswer() {
    numberObject.equation.push(numberObject.numberEntry.join(""));
    console.log(numberObject.equation.join(""));
    numberObject.equation.splice(0, numberObject.equation.length, parseFloat(eval(((numberObject.equation.join(""))))))
    numberObject.numberEntry.splice(0);
}
function equals() {
    return function () {
        var check = equalsCheck(); 
        if (check == true) { console.log("enter in a number") }
        else if (numberObject.numberEntry[0] == "-") {
            putParenthese();
            getAnswer();
            putAnswerOntoDom();
        }
        else {
            getAnswer();
            putAnswerOntoDom();
        }
    }
}
function equalsCheck() {
    if ((numberObject.numberEntry.length >= 1 && numberObject.equation.length == 0) || (numberObject.numberEntry.length == 0 && numberObject.equation.length >= 0 ||numberObject.numberEntry == "." && numberObject.equation.length !== 0)) {
        return true
    }else{
        return false
        }
    }


function putAnswerOntoDom() {
    outPutScreen.innerHTML = " ";
    outPutScreen.appendChild(document.createTextNode(eval(((numberObject.equation.join(""))))));
}

function addZeroCheck() {
    var check = decimalCheck(numberObject.numberEntry);
    if (check && numberObject.numberEntry.length == 1) {
        numberObject.numberEntry.unshift(Number(0));
    }
}


function decimalCheck(array) {
    var check = array.includes(".");
    console.log(check);
        return check;
}

function decimalAdd() {
    var checkForDecimal = decimalCheck(numberObject.numberEntry);
    if (checkForDecimal == true) {
        console.log("decimal present")
        return;
    } else if (checkForDecimal == false && (numberObject.equation.length != 1)) {
        numberObject.numberEntry.push(decimal);
        putNumberOntoDom()
    } else if (numberObject.equation.length == 1 && numberObject.numberEntry == 0) {
        numberObject.equation = [];
        numberObject.numberEntry.push(decimal);
        putNumberOntoDom();
    } 
}
function putNumberOntoDom() {
    outPutScreen.innerHTML = " ";
    outPutScreen.appendChild(document.createTextNode(numberObject.numberEntry.join("")))
}


function clear() {
    clearArrays();
    outPutScreen.innerHTML = " ";
    outPutScreen.appendChild(document.createTextNode("0"))
    
}
clrButton.addEventListener("click", function () {
    clear();
})
zeroButton.addEventListener("click", numberEntryDomManipulation(numZero));
oneButton.addEventListener("click", numberEntryDomManipulation(numOne));
twoButton.addEventListener("click", numberEntryDomManipulation(numTwo));
threeButton.addEventListener("click", numberEntryDomManipulation(numThree));
fourButton.addEventListener("click", numberEntryDomManipulation(numFour));
fiveButton.addEventListener("click", numberEntryDomManipulation(numFive));
sixButton.addEventListener("click", numberEntryDomManipulation(numSix));
sevenButton.addEventListener("click", numberEntryDomManipulation(numSeven));
eightButton.addEventListener("click", numberEntryDomManipulation(numEight));
nineButton.addEventListener("click", numberEntryDomManipulation(numNine));
addButton.addEventListener("click", arithmeticSymbolPressed(plus));
subtractionButton.addEventListener("click", arithmeticSymbolPressed(minus));
multipleButton.addEventListener("click", arithmeticSymbolPressed(multiple));
divideButton.addEventListener("click", arithmeticSymbolPressed(divide));
decimalButton.addEventListener("click", decimalAdd);
negativeAndPositiveButton.addEventListener("click", addNegativeSign)

function putParenthese() {
        numberObject.numberEntry.push(")");
        numberObject.numberEntry.unshift("(");
}

function splitArrayItem(array) {
    for (var i = 0; i <= array.length; i++){
        array[i]
    }
}
function addNegativeSign() {
    var negativeSignCheck = numberObject.numberEntry.includes("-")
    if (negativeSignCheck == false && numberObject.numberEntry.length > 0) {
        numberObject.numberEntry.unshift("-");
        putNumberOntoDom();
        console.log("#1")
    } else if (negativeSignCheck == true && numberObject.numberEntry.length > 0) {
        numberObject.numberEntry.shift("-");
        putNumberOntoDom();
        console.log("#2")
    } else if (numberObject.numberEntry.length == 0 && numberObject.equation.length == 1) { 
        var numString = numberObject.equation[0] + "";
        var numString = (Array.from(numString));
        console.log(numString);
        var item = negativeButtonForNumberInEquationArray(numString)
        numberObject.equation = [];
        numberObject.equation.push(Number(item));
        outPutScreen.innerHTML = " ";
        outPutScreen.appendChild(document.createTextNode(numberObject.equation[0]));
    }
}

function changeIntoPercentage() {
    var arithmeticSignCheck = mathSymbols.includes(numberObject.equation[numberObject.equation.length - 1]); 
    console.log(arithmeticSignCheck);
    if (numberObject.numberEntry.length > 0 && numberObject.numberEntry[0] !== "." && numberObject.equation.length === 0) {
        console.log("i am working #1")
        numberObject.numberEntry.push(percentageJs);
        numberObject.equation.push(eval(numberObject.numberEntry.join("")));
        console.log(numberObject.equation);
        numberObject.numberEntry = [];
        outPutScreen.innerHTML = " ";
        outPutScreen.appendChild(document.createTextNode(numberObject.equation[0]));
    } else if (numberObject.numberEntry[0] !== "." && numberObject.equation.length > 0 && numberObject.numberEntry.length == 0 && arithmeticSignCheck == false) {
        console.log("I am working #2")
        console.log(numberObject.equation);
        numberObject.equation.push(percentageJs);
        var answer = (eval(numberObject.equation.join("")));
        console.log(answer);
        numberObject.equation = [];
        numberObject.equation.push(answer);
        outPutScreen.innerHTML = " ";
        outPutScreen.appendChild(document.createTextNode(numberObject.equation[0]));
    } else if (numberObject.numberEntry.length > 0 && arithmeticSignCheck == true) {
        console.log("#4")
        numberObject.equation.push(numberObject.numberEntry.join(""));
        numberObject.numberEntry = [];
        console.log(numberObject.equation);
        numberObject.equation.push(percentageJs)
        console.log(numberObject.equation);
        var answer_two = eval(numberObject.equation.join(""));
        console.log(answer_two);
        numberObject.equation = [];
        numberObject.equation.push(answer_two);
        console.log(numberObject.equation);
        outPutScreen.innerHTML = " ";
        outPutScreen.appendChild(document.createTextNode((answer_two)));
    } else {
        console.log("wtf")
    }
}

percentageButton.addEventListener("click", function () {
    changeIntoPercentage();
})



function negativeButtonForNumberInEquationArray(array) {
    if (array[0] == "-") {
        array.shift()
        return array.join("");
    } else if (array[0] !== "-") {
        array.unshift("-");
        console.log(array);
        return array.join("");
        // return newArray.join("");
    }  
}



equalsButton.addEventListener("click", equals());
// percentageButton.addEventListener("click", displayArrayManipulation(percentageJs))
// negativeAndPositiveButton.addEventListener("click", displayArrayManipulation(negativeValue))


function putItemsOntoTheDom(item) {
    outPutScreen.innerHTML = " ";
    outPutScreen.appendChild(document.createTextNode((item)));
    displayArrayGlobal.splice(0, displayArrayGlobal.length, item);
}
function makeNegative() {
    if (displayArrayGlobal[displayArrayGlobal.length - 1]=="+") {
        alert('ERROR!!!');
        return;
    } else {
        var targetNum = displayArrayGlobal[displayArrayGlobal.length - 1];
        console.log(targetNum);
        displayArrayGlobal.pop();
        displayArrayGlobal.push(parseInt(targetNum * -1));
        putItemsOntoTheDom(displayArrayGlobal.join(""));
        displayArrayGlobal = displayArrayGlobal[0].split("+");
    }
}




