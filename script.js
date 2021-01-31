

var clrButton = document.querySelector("#clear");
var positiveAndNegativeButton = document.querySelector("#positivie-negativec");
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
var numOne = oneButton.value;
var twoButton = document.querySelector("#two");
var numTwo = twoButton.value;
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



var displayNumberOnCalcScreenArray = [];
var equationArray = [];


function displayNumOnCalcScreen(num) {
    return function () {
        var numArray = []
        numArray.push(num);
        console.log(numArray);
        displayNumberOnCalcScreenArray.push((num));
        console.log(displayNumberOnCalcScreenArray)
        var number = numArray.join(""); 
        outPutScreen.appendChild(document.createTextNode(number));   
    }
}

function arithmeticSignPressed(arithemticSign) {
    return function () {
        if (displayNumberOnCalcScreenArray.length == 0) {
            equationArray.push(((arithemticSign)));
            outPutScreen.innerHTML = " ";
            outPutScreen.appendChild(document.createTextNode(equationArray.join("")));
            console.log(equationArray.join(""))
            displayNumberOnCalcScreenArray.splice(0);
        } else if(displayNumberOnCalcScreenArray.length >= 0) {
            var number = displayNumberOnCalcScreenArray.join("");
            equationArray.push(parseInt(number));
            equationArray.push(((arithemticSign)));
            console.log(equationArray);
            outPutScreen.innerHTML = " ";
            outPutScreen.appendChild(document.createTextNode(equationArray.join("")));
            displayNumberOnCalcScreenArray.splice(0);
            console.log(equationArray);
        }
    }
}


function equals() {
    return function () {
        equationArray.push(parseInt(displayNumberOnCalcScreenArray.join("")))
        console.log(equationArray);
        var equation = equationArray.join("");
        outPutScreen.innerHTML = " ";
        outPutScreen.appendChild(document.createTextNode(eval(equation)));
        equationArray.splice(0);
        displayNumberOnCalcScreenArray.splice(0);
        equationArray.push(eval(equation));
    }
}



zeroButton.addEventListener("click", displayNumOnCalcScreen(numZero));
decimalButton.addEventListener("click", displayNumOnCalcScreen(decimal));
oneButton.addEventListener('click', displayNumOnCalcScreen(numOne));
twoButton.addEventListener('click', displayNumOnCalcScreen(numTwo));
threeButton.addEventListener('click', displayNumOnCalcScreen(numThree));
fourButton.addEventListener('click', displayNumOnCalcScreen(numFour));
fiveButton.addEventListener('click', displayNumOnCalcScreen(numFive));
sixButton.addEventListener('click', displayNumOnCalcScreen(numSix));
sevenButton.addEventListener('click', displayNumOnCalcScreen(numSeven));
eightButton.addEventListener('click', displayNumOnCalcScreen(numEight))
nineButton.addEventListener('click', displayNumOnCalcScreen(numNine));
equalsButton.addEventListener('click', equals())
addButton.addEventListener('click', arithmeticSignPressed(plus));
multipleButton.addEventListener("click", arithmeticSignPressed(multiple));
subtractionButton.addEventListener('click', arithmeticSignPressed(subtractionButton.value));
divideButton.addEventListener("click", arithmeticSignPressed(divide));













