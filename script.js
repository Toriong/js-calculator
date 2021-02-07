

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
        numberObject.numberEntry.push(value);
        putNumberOntoDom();
    }
}

function equationArrayManipulation(symbol) {
    numberObject.equation.push(symbol);
    numberObject.numberEntry.splice(0);
}





function checkForErrorsWhenArithmeticSignIsPressed() {
    var lastElementCheck = mathSymbols.includes(numberObject.equation[numberObject.equation.length - 1]);
    var secondToLastElementCheck = mathSymbols.includes(numberObject.equation[numberObject.equation.length - 2]);
    if (lastElementCheck && secondToLastElementCheck) {
        console.log("delete");
        delete numberObject.equation[numberObject.equation.length - 2];
    } else if (numberObject.equation[numberObject.equation.length - 2] == ".") {
        numberObject.equation = [];
        alert("ERROR! Calculator will now rest.")
        
    }
}


function arithmeticSymbolPressed(symbol) {
    return function () {
        if (numberObject.numberEntry.length > 0) {
            numberObject.equation.push((numberObject.numberEntry.join("")));
            equationArrayManipulation(symbol);
        } else if (numberObject.numberEntry.length == 0) {
            equationArrayManipulation(symbol);
        }
        checkForErrorsWhenArithmeticSignIsPressed();
        console.log(numberObject.equation);
    }
}
function clearArrays() {
    numberObject.equation = [];
    numberObject.numberEntry = [];
}

function equals() {
    return function () {
        var check = equalsCheck(); 
        if (check == true) {
            outPutScreen.innerHTML = "0";
            clearArrays();
        } else  {
            numberObject.equation.push(numberObject.numberEntry.join(""));
            numberObject.equation.splice(0, numberObject.equation.length, parseFloat(eval(((numberObject.equation.join(""))))))
            numberObject.numberEntry.splice(0);
            putAnswerOntoDom();
        }
    }
}
function equalsCheck() {
    if ((numberObject.numberEntry.length == 1 && numberObject.equation.length == 0) || (numberObject.numberEntry.length == 0 && numberObject.equation.length >= 0 || numberObject.equation.length==0 && numberObject.numberEntry.length == 0)) {
        return true
    }else{
        return false
        }
    }


function putAnswerOntoDom() {
    outPutScreen.innerHTML = " ";
    outPutScreen.appendChild(document.createTextNode(eval(((numberObject.equation.join(""))))));
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

oneButton.addEventListener("click", numberEntryDomManipulation(numOne));
twoButton.addEventListener("click", numberEntryDomManipulation(numTwo));
threeButton.addEventListener("click", numberEntryDomManipulation(numThree));
fourButton.addEventListener("click", numberEntryDomManipulation(numFour));
fiveButton.addEventListener("click", numberEntryDomManipulation(numFive));
sixButton.addEventListener("click", numberEntryDomManipulation(numSix));
addButton.addEventListener("click", arithmeticSymbolPressed(plus));
subtractionButton.addEventListener("click", arithmeticSymbolPressed(minus));
multipleButton.addEventListener("click", arithmeticSymbolPressed(multiple));
divideButton.addEventListener("click", arithmeticSymbolPressed(divide));
decimalButton.addEventListener("click", decimalAdd);



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




