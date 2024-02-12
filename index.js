// Function to add two numbers
function add(num1, num2) {
  return num1 + num2;
}

// Function to subtract two numbers
function subtract(num1, num2) {
  return num1 - num2;
}

// Function to multiply two numbers
function multiply(num1, num2) {
  return num1 * num2;
}

// Function to divide two numbers
function divide(num1, num2) {
  // throw user define exception if num2 is equal to 0
  if (num2 === 0) {
    throw new Error("Cannot divide by zero");
  }
  return num1 / num2;
}

// Function to perform the calculation based on operator
function calculate() {
  // Handling Exception
  try {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;

    // Handling with NaN
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Invalid Number");
    }

    let result;
    // Switch case for operator selection
    switch (operator) {
      case "+":
        result = add(num1, num2);
        break;
      case "-":
        result = subtract(num1, num2);
        break;
      case "*":
        result = multiply(num1, num2);
        break;
      case "/":
        result = divide(num1, num2);
        break;
      default:
        //Handling with Invalid operator
        throw new Error("Invalid operator");
    }
    //populating the result on display
    document.getElementById("result").innerText = `Result: ${result}`;
  } catch (error) {
    // populating the error message on display is occur
    document.getElementById("result").innerText = `Error: ${error.message}`;
  }
}
