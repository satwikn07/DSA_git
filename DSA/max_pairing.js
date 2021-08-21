function runProgram(input) {
    input = input.trim().split("\n")
    var [n,m] = input[0].trim().split(" ").map(Number);
    let arr1 = input[1].trim().split(" ").map(Number);
    let arr2 =  input[2].trim().split(" ").map(Number);
    // console.log(n,m,arr1,arr2);
    let count = 0
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(Math.abs(arr1[i]-arr2[j])==1){
                count++;
                arr1[i] = Infinity;
                arr2[j] = Infinity;
                break;
            }
        }
    }
    console.log(count);
}
  if (process.env.USERNAME === "sachi") {
    runProgram(`4 5
    1 4 6 2
    5 1 5 7 9`);
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