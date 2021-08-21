function runProgram(input){
    let min = +input.trim();
    let hr = Math.floor(min/60);
    let rem = min%60;
    if(hr==1){
        if(rem==0){
            console.log(hr+"hr "+"00mins");
        }else{
            console.log(hr+"hr "+rem+"mins");
        }
    }else{
        if(rem==0){
            console.log(hr+"hrs "+"00mins");
        }else{
            console.log(hr+"hrs "+rem+"mins");
        }
    }
}

if (process.env.USERNAME === "sachi") {
    runProgram(`135`);
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