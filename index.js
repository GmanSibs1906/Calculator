// set value to user imput or button clicks
// let displayValue = [];

// function userInputValue(userInput) {
//   let enteredValue = document.getElementById(`${userInput}`).textContent;
//   let userValue = parseInt(enteredValue);

//   displayValue.push(userValue);

//   console.log(displayValue);
// }

// let sum = 0;
// for (let i = 0; i <= displayValue.length; i++) {
//   console.log(displayValue[i]);
// }
function userInputValue(value) {
  document.getElementById("screen").value += value;
}

function clearDisplay() {
  document.getElementById("screen").value = "";
}

function calculate() {
  const expression = document.getElementById("screen").value;
  try {
    const result = eval(expression);
    document.getElementById("screen").value = result;
  } catch (error) {
    document.getElementById("screen").value = "Error";
  }
}
