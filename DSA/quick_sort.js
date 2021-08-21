function runProgram(input) {
    let inp = input.trim().split("\n");
    let n = +inp[0]
    let arr = inp[1].trim().split(" ").map(Number)
    console.log(quicksort(arr).join(" "));
    
}
function quicksort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    var pivot = array[0];
  
    var left = [];
    var right = [];
  
    for (var i = 1; i < array.length; i++) {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }
  
    return quicksort(left).concat(pivot, quicksort(right));
}


  
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