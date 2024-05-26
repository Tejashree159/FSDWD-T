
let displayValue = "";

function createButton(value, clickHandler) {
  let btn = document.createElement("button");
  btn.innerText = value;
  btn.addEventListener("click", clickHandler);
  return btn;
}


function appendDisplay(value) {
  displayValue += value;


  document.getElementById("display").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = displayValue;
}



function calculate() {

  let displayField = document.getElementById("display");

  try {
    displayValue = eval(displayValue).toString();
    displayField.value = displayValue;
  } catch {
    displayField.value = "error";
  }
}



let buttons = [
  ["clear", clearDisplay],
  [".", () => appendDisplay(".")],
  ["0", () => appendDisplay("0")],
  ["00", () => appendDisplay("00")],
  ["6", () => appendDisplay("6")],
  ["7", () => appendDisplay("7")],
  ["8", () => appendDisplay("8")],
  ["9", () => appendDisplay("9")],
  ["2", () => appendDisplay("2")],
  ["3", () => appendDisplay("3")],
  ["4", () => appendDisplay("4")],
  ["5", () => appendDisplay("5")],
  ["-", () => appendDisplay("-")],
  ["x", () => appendDisplay("*")],
  ["/", () => appendDisplay("/")],
  ["1", () => appendDisplay("1")],
  ["+", () => appendDisplay("+")],
  ["%", () => appendDisplay("%")],
  ["=", calculate],
  ["(",()=>appendDisplay("(")],
  [")",()=>appendDisplay(")")]
];


let buttonsContainer = document.getElementById("buttons");

buttons.forEach(([value, clickHandler]) => {
  let button = createButton(value, clickHandler);
  buttonsContainer.appendChild(button);
});
