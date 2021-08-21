function runProgram(input){
    let str = input.trim();
    let len=0;

    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            let sub= str.slice(i,j+1);
            if(checkpal(sub)){
                len=Math.max(len,sub.length)
            }
        }
    }
    console.log(len);

    function checkpal(s){
        let ans ="";
        for (let i = s.length-1; i >=0; i--) {
            ans+=s[i]
        }
        if(s==ans){
            return true
        }
        return false;
    }
}

if (process.env.USERNAME === "sachi") {
    runProgram(`thisracecarisgood`);
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