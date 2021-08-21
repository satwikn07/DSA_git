function runProgram(input) {
    var inp = input.trim().split("\n");
    var n = +inp[0]
    // console.log(n);
    for(let i=10**(n-1);i<10**(n);i++){
        
    }
}
  if (process.env.USERNAME === "THIS-PC") {
    runProgram(`
    2
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