let currentNum = '';
let lastNum = '';
let allNums = [];
let operators = [];
let result = '';
let screenTop = document.querySelector('.screen-top');
let screenBottom = document.querySelector('.screen-bottom');

document.querySelectorAll('.num').forEach( num => {
    num.addEventListener('click', buildCurrentCalc);
});
document.querySelector('.equals').addEventListener('click', evaluateCalc);
document.querySelectorAll('.operator').forEach(operator => {
    operator.addEventListener('click', setOperatorAndResetNum);
});
document.querySelector('.mc').addEventListener('click', clearScreen);

function buildCurrentCalc() {
    if (currentNum == result) currentNum = '';
    currentNum += this.innerHTML;
    screenTop.innerHTML += this.innerHTML;
}

function setOperatorAndResetNum() {
    operators.push(this.innerHTML);
    allNums.push(currentNum);
    currentNum = '';
    screenTop.innerHTML += ` ${this.innerHTML} `;
}

function clearScreen() {
    operator = 'clear';
    currentNum = '';
    allNums = [];
    operators = []
    screenTop.innerHTML = '';
    screenBottom.innerHTML = '0';
}

function evaluateCalc() {
    allNums.push(currentNum);
    result = parseFloat(allNums.shift());
    allNums.forEach(num => {
        switch (operators.shift()) {
            case '+':
                result += parseFloat(num);
                break;
            case '-':
                result -= parseFloat(num);
                break;
            case 'x':
                result *= parseFloat(num);
                break;
            case '/':
                result /= parseFloat(num);
                break;
            default:
                result = 'error';
        }
    });
    
    screenBottom.innerHTML = +result.toFixed(3);
    if (result == 'error') result = '';
    currentNum = result;
    operators = [];
    allNums = [];
    screenTop.innerHTML = '';
}