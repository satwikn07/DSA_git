function runProgram(input) {
    let inp = input.trim().split("\n");
    let test = +inp[0].trim();
    for (let i = 0,line=1; i < test; i++) {
        let m = +inp[line++].trim();
        let array = inp[line++].trim().split(" ").map(Number);
        check(array,m)

        function check(arr,n){
        for (let j = 0; j < n-2; j++) {
            if(arr[j]%2==0 && arr[j+1]%2==0 && arr[j+2]%2==0){
                return console.log("Yes");
            }
        }
        return console.log("No");
    }

    }
}
  if (process.env.USERNAME === "sachi") {
    runProgram(`2
    3
    1 2 3
    5
    1 2 4 6 8`);
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