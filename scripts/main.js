let currentNum = '';
let lastNum = '';
let operator = 'i';
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
    console.log(currentNum, lastNum);
}

function setOperatorAndResetNum() {
    operator = this.innerHTML;
    lastNum = currentNum;
    currentNum = '';
    screenTop.innerHTML += ` ${operator} `;
}

function clearScreen() {
    operator = 'clear';
    currentNum = '';
    lastNum = '';
    screenTop.innerHTML = '';
    evaluateCalc();
}

function evaluateCalc() {
    switch (operator) {
        case '+':
            result = parseFloat(currentNum) + parseFloat(lastNum);
            break;
        case '-':
            result = parseFloat(lastNum) - parseFloat(currentNum);
            break;
        case 'x':
            result = parseFloat(currentNum) * parseFloat(lastNum);
            break;
        case '/':
            result = parseFloat(lastNum) / parseFloat(currentNum);
            break;
        case 'clear':
            result = '0';
            break;
        default:
            result = 'error';
    }
    console.log(result);
    screenBottom.innerHTML = result;
    if (result == 'error') result = '';
    currentNum = result;
    operator = '';
    screenTop.innerHTML = '';
}