function runProgram(input) {
    let inp = input.trim().split("\n");
    let test = inp[0].trim();
    for (let i = 0,line=1; i < test; i++) {
        let [n,t] = inp[line++].trim().split(" ").map(Number);
        let arr = inp[line++].trim().split(" ").map(Number);
        arr.sort((a,b)=>a-b);
        let start=0,end=n-1;
        let flag=true;
        while(start<end && end>start){
            if(arr[start]+arr[end]==t){
                console.log(1);
                flag=false;
                break;
            }else if(arr[start]+arr[end]>t){
                end--;
            }else{
                start++;
            }
        }
        if(flag){
            console.log(-1);
        }
    }
}
  if (process.env.USERNAME === "sachi") {
    runProgram(`1
    5 2
    3 4 0 2 7`);
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