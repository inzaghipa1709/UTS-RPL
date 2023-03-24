class Calculator {
  static division(num1, num2) {
    return num1 / num2;
  }

  static subtraction(num1, num2) {
    return num1 - num2;
  }

  static multiplication(num1, num2) {
    return num1 * num2;
  }

  static addition(num1, num2) {
    return num1 + num2;
  }
}

console.log(Calculator.division(10, 2));
console.log(Calculator.subtraction(10, 2));
console.log(Calculator.multiplication(10, 2));
console.log(Calculator.addition(10, 2));
