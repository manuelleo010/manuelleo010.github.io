const numbers = document.querySelectorAll('[data-number]')
const operations = document.querySelectorAll(".operation")
const ac = document.querySelector(".clear")
const del = document.querySelector(".del")
const equals = document.querySelector(".equals")
const currentInput = document.querySelector(".current-input")
const holdingInput = document.querySelector(".hold-display")

class Calculator {
  constructor(currentdisplay,holdingdisplay){
    this.currentdisplay = currentdisplay;
    this.holdingdisplay = holdingdisplay;
    this.clear()
  }
  clear(){
    this.currentNumber = ""
    this.holdingnumber = ""
    this.operation = ""
  }
  dele(){
    this.currentNumber = this.currentNumber.toString().slice(0,-1)
  }
  displayNumbers(number){
    if(number === "." && this.currentNumber.includes("."))return
    this.currentNumber = this.currentNumber.toString() + number.toString()
  }
  
  operations(operation){
    if(this.currentNumber === "")return
    if(this.holdingnumber !== ""){
      this.calculation()
    }
    this.operation = operation
    this.holdingnumber = this.currentNumber 
    this.currentNumber = ""   
  }
  calculation(){
    let computation
    let curr = parseFloat(this.currentNumber)
    let prev = parseFloat(this.holdingnumber)
    if(!isNaN(curr) && !isNaN(prev)){
      switch (this.operation) {
        case "+": computation = curr + prev
          
          break;
          case "-": computation = prev - curr
          
          break;
          case "x": computation = prev * curr
          
          break;
          case "/": computation = prev / curr
          
          break;
        default: computation = this.currentNumber
          break;
      }
      this.currentNumber = computation
      this.operation = undefined
      this.holdingnumber = ""
    }
  }
  equal(){
    this.calculation()
  }
  generatingCommaNumbers(number){
    const stringNumber = number.toString()
    const intNumber = parseFloat(stringNumber.split('.')[0])
    const deciNumber = stringNumber.split('.')[1]

    let numResult 
    if(isNaN(intNumber)){
      numResult = ''
    }else{
      numResult = intNumber.toLocaleString('en',{maximalFraction: 1})
    }
    if(deciNumber != null){
      return `${numResult}${"."}${deciNumber}`
    }else{
      return numResult 
    }
  }
  updateDisplay(){
    this.currentdisplay.innerHTML = this.generatingCommaNumbers(this.currentNumber)
    if(this.operation != null){
       this.holdingdisplay.innerHTML = `${this.generatingCommaNumbers(this.holdingnumber)} ${this.operation}`
    }
  }
}

let calculator = new Calculator(currentInput,holdingInput)
numbers.forEach(number =>{
  number.addEventListener("click",(e)=>{
    e.preventDefault()
    calculator.displayNumbers(number.innerHTML)
    calculator.updateDisplay()
  })
})
operations.forEach(operator =>{
  operator.addEventListener("click",(e)=>{
    e.preventDefault()
    calculator.operations(operator.innerHTML)
    calculator.updateDisplay()
    })
})
equals.addEventListener("click",(e)=>{
  e.preventDefault()
  calculator.calculation()
  calculator.updateDisplay()
})
ac.addEventListener("click",(e)=>{
  e.preventDefault()
  calculator.clear()
  calculator.updateDisplay()
})
del.addEventListener("click",(e)=>{
  e.preventDefault()
  calculator.dele()
  calculator.updateDisplay()
})