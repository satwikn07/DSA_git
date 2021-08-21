function runProgram(input){
    let bill = +input.trim();
    bill=bill-80;
//    console.log(bill);
//    console.log(bill);
let unit=0;
    if(bill<=150){
        unit+= bill/3;
    }else if(bill>150 && bill<=650){
        unit+= 50 + (bill-150)/5;
    }else if(bill>650){
        unit+= 50 + 100+ (bill-650)/10;
    }
    console.log(unit);
}

if (process.env.USERNAME === "sachi") {
    runProgram(`930`);
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