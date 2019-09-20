
const output = document.getElementById('output');

let total = 0;
var firstParam = '';
var secondParam = '';
var operator = '';

output.textContent = total;

const equals = document.getElementById('equals').addEventListener('click', _ => {
    let val1 = Number(firstParam);
    let val2 = Number(secondParam)
    if (operator === 'plus') {
        total = val1 + val2
        output.textContent = total;
    }
    if (operator === 'subtract') {
        total = val1 - val2
        output.textContent = total;
    }
    if (operator === 'divide') {
        total = val1 / val2
        output.textContent = total;
    }
    if (operator === 'multiply') {
        total = val1 * val2
        output.textContent = total;
    }
    firstParam = '';
    secondParam = '';
    operator = '';
})

function myFunction(target) {
    let value = document.getElementById(target).value
    if (operator === '') {
        firstParam += value
        output.textContent = firstParam
    }
    else {
        secondParam += value
        output.textContent = secondParam
    }
    // console.log(firstParam)
    // console.log(secondParam)
    // console.log(operator)
}

function myOperator(target) {
    operator = target
}

