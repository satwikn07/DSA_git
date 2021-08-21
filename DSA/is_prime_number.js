function runProgram(input) {
    let inp = input.trim().split("\n");
    let test = +inp[0].trim();
    for (let i = 1;i <= test; i++) {
        let n = inp[i].trim();
//        console.log(n);
        if(n>3){
        prime(+n)?console.log("Yes"):console.log("No");
        }else{
            if(n==3 || n==2){
                console.log("Yes");                
            }else{
                console.log("No");
            }
        }

        function prime(no){
            if(no<=1){
                return false
            }
            if(no%2==0){
                return false
            }
            for(let j=3 ;j<=Math.sqrt(no);j+=2){
                if(no%j==0){
                    return false
                }
            }
            return true
      }
    }
}
  if (process.env.USERNAME === "sachi") {
    runProgram(`4
    1
    2
    3
    4`);
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