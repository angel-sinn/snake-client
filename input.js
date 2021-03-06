/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */

// Stores the active TCP connection object
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (input) {
  if (input === "\u0003") {
    process.exit();
  }
  if (input === "w") {
    connection.write("Move: up");
  }
  if (input === "a") {
    connection.write("Move: left");
  }
  if (input === "s") {
    connection.write("Move: down");
  }
  if (input === "d") {
    connection.write("Move: right");
  }
  if (input === "1") {
    connection.write("Say: hello!");
  }
  if (input === "2") {
    connection.write("Say: byeeeee!");
  }
};

module.exports = {
  setupInput,
};
