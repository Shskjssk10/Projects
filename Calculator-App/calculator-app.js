class Calculator{
    constructor(previousOperand, currentOperand){
        this.previousOperand = previousOperand;
        this.currentOperand = currentOperand;
        this.clear();
    }
    clear(){
        this.currentOperand='';
        this.previousOperand='';
        this.opreation = undefined;
    }

    delete(){

    }

    appendNumber(number){
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand += number.toString();
    }

    chooseOperation(operation){

    }

    compute(){

    }

    getDisplayNumber(){

    }

    updateDisplay(){
        currentOperandTextElement = this.getDisplayNumber(this.currentOperand)
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

const cadenCalculator = new Calculator(currentOperandTextElement);

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