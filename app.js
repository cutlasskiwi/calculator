//Defined variables:
const buttons = document.querySelectorAll("button");
const display = document.querySelector(".screen");

//Button function:
buttons.forEach(function (button) {
  button.addEventListener("click", calculate);
});

// Calculate action:
function calculate(event) {
  // current clicked buttons value
  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === "=") {
    if (display.value !== "") {
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === "clear") {
    display.value = "";
  } else {
    display.value += clickedButtonValue;
  }
}
