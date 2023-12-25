class Calculator{
    constructor(previousOperand, currentOperand){
        this.previousOperand = previousOperand;
        this.currentOperand = currentOperand;
    }
    clear(){

    }

    delete(){

    }

    appendNumber(){
        
    }

    chooseOperation(operation){

    }

    compute(){

    }

    getDisplayNumber(){

    }

    updateDisplay(){

    }

}

const numberButtons = document.querySelectorAll('[data-numbers]');
const allClearButton = document.querySelector('[data-all-clear]');
const backSpaceButton = document.querySelector('[data-backspace]');
const operandButtons = document.querySelectorAll('[data-operands]');
const equalSignButton = document.querySelector('[data-equal-sign]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
console.log(currentOperandTextElement);
let previousOperand;

const cadenCalculator = new Calculator(currentOperandTextElement, previousOperand);

numberButtons.forEach(button => {
    document.addEventListener('click', () => {
        cadenCalculator.appendNumber(button.innerHTML);
        cadenCalculator.updateDisplay();
    })
})
equalSignButton.addEventListener('click', button => {
    cadenCalculator.compute();
    cadenCalculator.updateDisplay();
})
backSpaceButton.addEventListener('click', button => {
    cadenCalculator.delete();
    cadenCalculator.updateDisplay();
})
operandButtons.forEach(button => {
    document.addEventListener('click', () => {
        cadenCalculator.chooseOperation(button.innerHTML);
        cadenCalculator.updateDisplay();
    })
})
allClearButton.addEventListener('click', button => {
    cadenCalculator.clear();
    cadenCalculator.updateDisplay();
})