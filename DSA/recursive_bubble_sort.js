// Recursive Bubble sort
// Description

// You are given an array ofNunsorted numbers. Your task is to write BUBBLE SORT using RECURSION such that numbers present in the array get sorted.

// USING ANY OTHER ALGORITHM OR USING SORT FUNCTION WOULD LEAD TO DISQUALIFICATION.

function runProgram(input) {
    input = input.trim().split(/[\n\r]+/);
  
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
  
    //console.log(arr, N);
  
    let bubbleSort = (arr, n) => {
      if (n == 1) {
        return arr;
      }
  
      for (let i = 0; i < n - 1; i++)
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
        }
  
      return bubbleSort(arr, n - 1);
    };
  
    console.log(bubbleSort(arr, n));
  }
  
  // output 0 3 5 8 9
  if (process.env.USERNAME === "THIS-PC") {
    runProgram(`
    5
    3 5 0 9 8
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