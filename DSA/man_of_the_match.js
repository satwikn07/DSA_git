function runProgram(input) {
    // TC = O(n)
    // SC = O(1)
    input = input.trim().split(/[\n\r]+/);
    //console.log(input);
    let test = +input[0];
  
    for (let z = 0, line = 1; z < test; z++) {
      let N = +input[line++];
      let arr = input[line++].trim().split(" ").map(Number);
      console.log(N, arr);
    }
  }
  
  if (process.env.USERNAME === "THIS-PC") {
    runProgram(`
      3
      2
      1 2 0 0 1 1 6 6 4 1 6 1
      3
      0 0 0 0 0 1 0 0 0 0 1 1 6 6 6 1 4 4
      1
      0 1 0 1 0 0
      `);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }