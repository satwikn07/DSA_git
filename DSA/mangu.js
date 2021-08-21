function runProgram(input) {
    input = input.trim().split(/[\n\r]+/);
  
    tests = +input[0];
  
    for (let x = 0, line = 1; x < tests; x++) {
      let [N, B] = input[line++].trim().split(" ").map(Number);
  
      let arr = input[line++].trim().split(" ").map(Number);
  
  
      arr.sort((a, b) => a - b);
  
      //console.log(arr);
  
      let i = 0;
      let j = N - 1;
      let flag = false;
  
      while (i!==j) {
        if (arr[i] + arr[j] === B) {
          flag = true;
          console.log(i, j);
          break;
        }
        if (arr[i] + arr[j] < B) {
          i++;
        }
        if (arr[i] + arr[j] > B) {
          j--;
        }
      }
      if (!flag) {
        console.log(-1, -1);
      }
    }
  }
  if (process.env.USERNAME === "THIS-PC") {
    runProgram(`
    3
  4 9
  2 7 11 15
  5 10
  1 2 3 5 5
  2 100
  48 49
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
  
  