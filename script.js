const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
  if (btnValue === "=" && output !== "") {
    output = evaluateExpression();
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

const evaluateExpression = () => {
  try {
    let result = eval(output.replace("%", "/100"));
    return Number.isFinite(result) ? result : "Error";
  } catch (error) {
    return "Error";
  }
};

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  if (b === 0) {
    return "Error";
  }
  return a / b;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    calculate(e.target.dataset.value);
  });
});
