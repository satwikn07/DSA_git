function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0].trim();
    for (var i = 0, line = 1; i < test; i++) {
      var n = +input[line++].trim();
      var sample = input[line++].trim().split(" ").map(Number);
      console.log(Product(sample, n));
  
      function Product(array, n) {
        var res = array[0];
        var min = array[0];
        var max = array[0];
        for (var j = 1; j < n; ++j) {
          var product = array[j];
          var tempMax = max;
          max = Math.max(max * product, min * product, product);
          min = Math.min(min * product, tempMax * product, product);
          res = Math.max(res, max);
        }
        return res;
      }
    }
  }
  
  if (process.env.USERNAME === "THIS-PC") {
    runProgram(`2
      3
      -3 0 -2
      4
      4 5 -1 2 
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