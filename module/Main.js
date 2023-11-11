class Calculator{
  
  constructor(bil1,bil2){
    this.bil1 = parseInt(bil1);
    this.bil2 =parseInt(bil2);
  }
  static result = 0


  add(){
    Calculator.result = this.bil1+this.bil2
    return "Result : "+ Calculator.result
  }
  subtract(){
    Calculator.result = this.bil1-this.bil2
    return "Result : "+ Calculator.result
  }

  multiply(){
    Calculator.result = this.bil1*this.bil2
    return "Result : "+ Calculator.result
  }
  divide(){
    Calculator.result = this.bil1/this.bil2
    return "Result : "+ Calculator.result
  }
}

export default Calculator;