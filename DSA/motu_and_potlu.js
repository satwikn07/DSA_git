function runProgram(input){
    let dist = +input.trim();
    let steps =0;
    let rem=0;
    if(dist==1){
        steps=1;
    }else if(dist==2){
        steps=2
    
    }else if(dist==3){
        steps=3
    }
    else if(dist==4){
        steps=4
    }else if(dist==5){
        steps=5
    }else{
        steps+=dist/5;
        if(dist%5){
            rem=1;
        }
    }
    console.log(Math.floor(steps+rem));
}

if (process.env.USERNAME === "sachi") {
    runProgram(`26`);
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