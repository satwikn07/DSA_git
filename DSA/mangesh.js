function runProgram(input) {
    input = input.trim().split(" ").map(Number);
    // console.log(input);
    var row = input[0];
    var col = input[1];
    console.log(row, col); 
    var count = true;
    for (var i = 0; i < row; i++) {
      var str = "";
      for (var j = 0; j < col; j++) {
        if (i % 2 != 0) {
          if (count == true && col - 1 == j) {
            str += "#";
          } else if (count == false && j == 0) {
            str += "#";
          } else {
            str += ".";
          }
        } else {
          str += "#";
        }
      }
      console.log(str);
      if (i % 2 !== 0) {
        count = !count;
      }
    }
  }
  if (process.env.USERNAME === "dell") {
    runProgram(`5 5`);
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