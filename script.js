

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

var mathSymobols = [plus, minus, divide, multiple]
var numbers = [0,1,2,3,4,5,6,7,8,9]


var getAnswer = equals();
function arrayCheck(item) {
    return function () {
        if (mathSymobols.includes(item) && displayArrayGlobal[displayArrayGlobal.length - 1] === item && displayArrayGlobal[displayArrayGlobal.length - 2] === item) {
            displayArrayGlobal.pop();
            var stopFunction = true
        } else if (typeof displayArrayGlobal[0] === 'number' && parseInt(displayArrayGlobal[displayArrayGlobal.length - 1]) === parseInt(item)) {
            displayArrayGlobal.splice(0, displayArrayGlobal.length, item);
            outPutScreen.innerHTML = " ";
        } else if (typeof displayArrayGlobal[0] === 'number' && (displayArrayGlobal[displayArrayGlobal.length - 1]) === '+') {
            displayArrayGlobal.splice(0, 1, JSON.stringify(displayArrayGlobal[0]))
        } else if (displayArrayGlobal[displayArrayGlobal.length - 1] === percentageJs && displayArrayGlobal.length == 2) {
            getAnswer();
            stopFunction = true;
        } else if (displayArrayGlobal[displayArrayGlobal.length - 1] === percentageJs && displayArrayGlobal.length > 2) {
            var index = displayArrayGlobal.indexOf(percentageJs);
            displayArrayGlobal.splice(index, 1);
            var doubleCheck = getAnswer();
            if (doubleCheck == true) {
                stopFunction = true;
            }
            displayArrayGlobal.push(percentageJs);
            getAnswer();
            stopFunction = true;
        }
        return stopFunction;
    }
}

function check() {
    if (numberObject.numberEntry.length === 0 && numberObject.equation.length == 1) {
        numberObject.equation.splice(0);
    }
}
function numberEntryDomManipulation(value) {
    return function () {
        check();
        numberObject.numberEntry.push(value);
        outPutScreen.innerHTML = " ";
        outPutScreen.appendChild(document.createTextNode(numberObject.numberEntry.join("")));
    }
}

function equationArrayManipulation(symbol) {
    numberObject.equation.push(symbol);
    numberObject.numberEntry.splice(0);
}

function arithmeticSymbolPressed(symbol) {
    return function () {
        if (numberObject.numberEntry.length > 0) {
            numberObject.equation.push(numberObject.numberEntry.join(""));
            equationArrayManipulation(symbol);
        } else if (numberObject.numberEntry.length == 0) {
            equationArrayManipulation(symbol);
        }
    }

}


function equals() {
    return function () {
        numberObject.equation.push(numberObject.numberEntry.join(""));
        var answer = eval(numberObject.equation.join(""));
        numberObject.equation.splice(0, numberObject.equation.length, parseInt(answer))
        numberObject.numberEntry.splice(0);
        outPutScreen.innerHTML = " ";
        outPutScreen.appendChild(document.createTextNode(answer));
    }
}


oneButton.addEventListener("click", numberEntryDomManipulation(numOne));
twoButton.addEventListener("click", numberEntryDomManipulation(numTwo));
addButton.addEventListener("click", arithmeticSymbolPressed(plus));
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




