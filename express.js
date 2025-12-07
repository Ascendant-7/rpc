// imports
const express = require("express");
const cors = require("cors");

// app and port init
const app = express();
const PORT = 3000;

// app packages
app.use(express.json());
app.use(cors());

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

const functions = {
  calculate,
};

app.post("/", (request, response) => {
  const data = ({ funcName, args } = request.body);
  // console.log("received:", JSON.stringify(data));
  const result = functions[funcName](...Object.values(args));
  response.json({ result });
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
