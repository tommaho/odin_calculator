//Odin Project Calculator
//make a calculator that supports add subtract multiply divide

function operate(calculationString) {
  let parts = calculationString.split(/(\s*[-+*/]\s*)/);

  parts = parts
    .map((part) => part.trim())
    .map((part) => (isNaN(part) ? part : parseInt(part)));

  let [left, operator, right] = parts;

  switch (operator) {
    case '+':
      return left + right;
    case '-':
      return left - right;

    case '*':
      return left * right;

    case '/':
      return left / right;
    default:
      return NaN;
  }
}
