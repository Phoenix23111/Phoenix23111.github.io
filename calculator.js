const input = document.querySelector(".input");
const output = document.querySelector(".output");
const btns = document.querySelectorAll(
  ".itemdot, .item0, .item1, .item2, .item3, .item4 , .item5, .item6, .item7, .item8, .item9"
);
const funcBtns = document.querySelectorAll(".frac, .mul, .sub, .itemadd");
const submitBtn = document.querySelector(".submit");

let temp1 = null;
let temp2 = null;
let operation = null;
let result = null;
let variable = null;

function clearscr() {
  console.log("clearscr() called");
  input.textContent = "";
  output.textContent = "";
  temp1 = null;
  temp2 = null;
  operation = null;
  result = null;
}

funcBtns.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "") return;

    if (result === null) {
      temp1 = parseFloat(input.textContent);
    } else if (result !== null) {
      temp1 = result;
      input.textContent = result.toString();
      result = null;
    }
    input.textContent += button.textContent;
    operation = button.textContent;
  });
});

submitBtn.addEventListener("click", () => {
  if (temp1 === null || input.textContent === "") {
    return;
  }

  let total = 0;

  switch (operation) {
    case "+":
      total = temp1 + temp2;
      break;
    case "-":
      total = temp1 - temp2;
      break;
    case "*":
      total = temp1 * temp2;
      break;
    case "/":
      total = temp1 / temp2;
      break;

    default:
      break;
  }
  result = total;
  input.textContent = total;
  temp1 = null;
  temp2 = null;
  operation = null;
});

btns.forEach((button) => {
  button.addEventListener("click", () => {
    if (output.textContent !== "" && operation === null) {
      clearscr();
    }

    input.textContent += button.textContent;
    if (operation !== null) {
      variable = null;
      variable = input.textContent.split(operation);
      temp2 = parseFloat(variable[variable.length - 1]);
    }
  });
});
