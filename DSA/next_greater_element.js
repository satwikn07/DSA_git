function runProgram(input) {
    let inp = input.trim().split("\n");
    let test = inp[0].trim();
    for (let t = 0,line=1; t < test; t++) {
        let n = +inp[line++].trim();
        let arr = inp[line++].trim().split(" ").map(Number);
//        console.log(n,arr);
        let stack =[arr[n-1]];
        let ans = [-1];
        for (let i = n-2; i >=0; i--) {
                while(stack.length!=0 && stack[stack.length-1]<=arr[i]){
                    stack.pop();
                }
                if(stack.length==0){
                    ans.push(-1)
                }else{
                    ans.push(stack[stack.length-1])
                }
                stack.push(arr[i])
            }
            console.log(ans.reverse().join(" "));
        }
}
  if (process.env.USERNAME === "sachi") {
    runProgram(`1
    4
    1 3 2 4`);
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