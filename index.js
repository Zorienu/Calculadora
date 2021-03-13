const operacionString = "2+1*33/2*4-10".split(/([\/\+\-\*])/)
const operacion = operacionString.map(item=>Number(item) ? Number(item) : item)

console.log(operacion)

const operar = (op)=>{
    if (op.length !== 1) {
        const dividir = op.indexOf('/')
        if (dividir !== -1) {
            op.splice(dividir - 1, 3, op[dividir - 1] / op[dividir + 1])
            console.log(op)
            operar(op)
        }

        const multiplicar = op.indexOf('*')
        if (multiplicar !== -1) {
            op.splice(multiplicar - 1, 3, op[multiplicar - 1] * op[multiplicar + 1])
            console.log(op)
            operar(op)
        }

        const sumar = op.indexOf('+')
        if (sumar !== -1) {
            op.splice(sumar - 1, 3, op[sumar - 1] + op[sumar + 1])
            console.log(op)
            operar(op)
        }

        const restar = op.indexOf('-')
        if (restar !== -1) {
            op.splice(restar - 1, 3, op[restar - 1] - op[restar + 1])
            console.log(op)
            operar(op)
        }
    }

    return op
}

let nani = operar(operacion)









let operation = "";

const buttonLabels = [
  "M+",
  "M-",
  "MR",
  "/",
  "7",
  "8",
  "9",
  "+",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "",
  "0",
  "",
  "",
];

const stringToHTML = (s) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(s, "text/html");
  return doc.body.firstChild;
};

const setInput = () => {
  const calculatorInput = document.getElementById("input-calculator");
  calculatorInput.value = operation;
  console.log(operation);
};

const createButton = (label) => {
  const buttonElement = stringToHTML(`<button class="button">${label}</button>`);
  buttonElement.addEventListener("click", () => {
    operation += label;
    setInput();
  });
  return buttonElement;
};

const renderButtons = () => {
  const buttonsContainer = document.getElementById("buttons");

  buttonLabels.forEach((label) => {
    if (label === "") buttonsContainer.appendChild(document.createElement("div"));
    else {
      const button = createButton(label);
      buttonsContainer.appendChild(button);
    }
  });
};

window.onload = () => {
  renderButtons();
};

