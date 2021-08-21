function runProgram(input) {
    var inp = input.trim().split("\n");
    var t = +inp[0].trim();
    for (let i = 1; i <= t; i++) {
        let c = (+inp[i].trim());
        help(c,1)?console.log("Yes"):console.log("No");

        function help(n,k){
            if(n==k){
                return true
            }else if(k>n){
                return false
            }
            return help(n,k*10) || help(n,k*20)
        }
    }
}
      if (process.env.USERNAME === "sachi") {
        runProgram(`5
        1
        2
        10
        25
        200`);
      } else{
        process.stdin.resume();
        process.stdin.setEncoding("ascii");
        let read = "";
        process.stdin.on("data", function (input) {
            read += input;
        });
        process.stdin.on("end", function () {
            read = read.replace(/\n$/,"")
           runProgram(read);
        });
        process.on("SIGINT", function () {
            read = read.replace(/\n$/,"")
            runProgram(read);
            process.exit(0);
        })
    }