// imports
const express = require("express");
const cors = require("cors");

// app and port init
const app = express();
const PORT = 5500;

// middleware
app.use(express.json());
app.use(cors());

// server-side storage
let store = 0;
let records = [];

// Safe calculation function using Function constructor
function safeCalculate(expr) {
  try {
    // Evaluate arithmetic expression including parentheses
    const result = Function('"use strict"; return (' + expr + ")")();
    return Number.isFinite(result) ? result : "Invalid calculation";
  } catch {
    return "Invalid expression";
  }
}

// RPC functions
const functions = {
  calculate: (expr) => {
    const result = safeCalculate(expr);
    store = result;

    // Add to server history
    records.unshift({ expression: expr, result });
    console.log(`Calculated: ${expr} = ${result}`);
    return result;
  },

  record: (expr) => {
    // Store last calculation with optional expression
    records.unshift({ expression: expr, result: store });
    console.log(`Recorded: ${expr} = ${store}`);
    return "recorded";
  },

  clear: () => {
    records.length = 0;
    console.log("History cleared");
    return "cleared";
  },
};

// RPC endpoint
app.post("/", (req, res) => {
  const { funcName, args } = req.body;
  console.log("Function requested:", funcName);
  console.log("Args:", args);

  if (!(funcName in functions)) {
    return res.status(400).json({ result: "Invalid function" });
  }

  try {
    const result = functions[funcName](...Object.values(args));
    res.json({ result, history: records });
  } catch (err) {
    res.status(500).json({ result: "Server error: " + err.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
