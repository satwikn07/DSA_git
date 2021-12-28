function runProgram(input) {
    let inp = input.trim().split("\n");
    let [n,m] = inp[0].trim().split(" ").map(Number);
    let arr = [];
    // console.log(n,m);
    for (let i = 1;i <= n; i++) {
        arr.push(inp[i].trim().split(" ").map(Number))
    }
    let count = 0
    for(let x=0;x<n;x++){
        for(let y=0;y<m;y++){
            isPrime(arr[x][y])?count++:null
        }
    }
    console.log(count);
}
function isPrime(n)
{
    
    if (n <= 1)
        return false;
  
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;
  
    return true;
}
  
  if (process.env.USERNAME === "satwi") {
    runProgram(`3 3
    1 2 3 
    4 5 6
    7 8 9`);
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