// imports
const express = require("express");
const cors = require("cors");

// app and port init
const app = express();
const PORT = 5500;

// app packages
app.use(express.json());
app.use(cors());

// app storage
let records = [];

// app functions
const calculate = (a, b, op) => {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : "cannot divide by zero!";
    default:
      return "invalid";
  }
};
const record = (a, b, op, result) => {
  records.push(`${a} ${op} ${b} = ${result}`);
  console.log("saved");
  console.log(records);
  return "recorded";
};

const clear = () => {
  records = [];
  console.log("cleared");
  return "cleared";
};

const functions = {
  calculate,
  record,
  clear,
};

app.post("/", (request, response) => {
  const data = ({ funcName, args } = request.body);
  // console.log("received:", JSON.stringify(data));
  console.log("running function:", funcName);
  console.log("args:", args, "\n");
  const result = functions[funcName](...Object.values(args));
  response.json({ result });
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
