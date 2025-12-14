# **_RPC_**

## I4 GIC C Team 3 — Distributed Systems

This is our group project on Remote Procedure Call. We built a simple client–server mockup to demonstrate how RPC works in practice.

| Members       | ID        |
| ------------- | --------- |
| Ang Panha     | e20221707 |
| Rin Nairith   | e20221557 |
| Seng Chaokhun | e20220478 |
| Chi Savmoeng  | e20220753 |

## What is RPC?

Remote Procedure Call lets a client execute a function on a remote server as if it were a local function call. The framework handles all the networking details, parameter passing, and responses under the hood.

## Why It’s Useful

RPC makes cross-machine communication feel seamless. A client can request data, trigger operations, or offload computation to a server without manually handling sockets or messages.

## How It Works

1. Client calls a function.
2. The RPC layer packages the call + arguments.
3. Server receives it and runs the corresponding procedure.
4. Return value is sent back automatically.

## How to Run This Project

1. Clone the repo:

   ```sh
   git clone https://github.com/Ascendant-7/rpc.git
   cd rpc
   ```

2. Install dependencies **(Node required)**:

   ```sh
   npm install
   ```

3. Start the server:

   ```sh
   node express.js
   ```

4. Open the site in your browser:

   ⚠️ **Don't open `index.html` directly.**
   It must be served through Express.
   Go to:

   ```sh
   http://localhost:3000
   ```

Happy testing!
