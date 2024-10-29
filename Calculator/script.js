class Calculator {
    constructor() {
        this.displayValue = '0';
        this.firstOperand = null;
        this.waitingForSecondOperand = false;
        this.operator = null;
        this.bindEvents();
    }

    bindEvents() {
        document.querySelector('.calculator').addEventListener('click', (event) => {
            const target = event.target;
            
            if (target.matches('button')) {
                if (target.classList.contains('operator')) {
                    this.handleOperator(target.dataset.action);
                } else if (target.classList.contains('decimal')) {
                    this.inputDecimal();
                } else if (target.classList.contains('number')) {
                    this.inputDigit(target.textContent);
                }
                this.updateDisplay();
            }
        });
    }

    inputDigit(digit) {
        if (this.waitingForSecondOperand) {
            this.displayValue = digit;
            this.waitingForSecondOperand = false;
        } else {
            this.displayValue = this.displayValue === '0' ? digit : this.displayValue + digit;
        }
    }

    inputDecimal() {
        if (this.waitingForSecondOperand) {
            this.displayValue = '0.';
            this.waitingForSecondOperand = false;
            return;
        }

        if (!this.displayValue.includes('.')) {
            this.displayValue += '.';
        }
    }

    handleOperator(nextOperator) {
        const inputValue = parseFloat(this.displayValue);

        if (nextOperator === 'clear') {
            this.reset();
            return;
        }

        if (nextOperator === 'backspace') {
            this.displayValue = this.displayValue.slice(0, -1) || '0';
            return;
        }

        if (this.firstOperand === null && !isNaN(inputValue)) {
            this.firstOperand = inputValue;
        } else if (this.operator) {
            const result = this.calculate(this.firstOperand, inputValue, this.operator);
            this.displayValue = `${parseFloat(result.toFixed(7))}`;
            this.firstOperand = result;
        }

        this.waitingForSecondOperand = true;
        this.operator = nextOperator;
    }

    calculate(firstOperand, secondOperand, operator) {
        switch (operator) {
            case '+':
                return firstOperand + secondOperand;
            case '-':
                return firstOperand - secondOperand;
            case '*':
                return firstOperand * secondOperand;
            case '/':
                return firstOperand / secondOperand;
            case '%':
                return firstOperand % secondOperand;
            case '=':
                return secondOperand;
            default:
                return secondOperand;
        }
    }

    reset() {
        this.displayValue = '0';
        this.firstOperand = null;
        this.waitingForSecondOperand = false;
        this.operator = null;
    }

    updateDisplay() {
        document.querySelector('.output').textContent = this.displayValue;
    }
}

// Initialize the calculator
document.addEventListener('DOMContentLoaded', () => {
    new Calculator();
});