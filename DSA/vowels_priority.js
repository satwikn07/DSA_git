function runProgram(input) {
    let inp = input.trim().split("\n");
    let test = +inp[0].trim();
    for (let i = 1; i <=test ; i++) {
//        console.log(inp[i].trim());
        let str = inp[i].trim();
        let vow="",cons="";
        for(let j=0;j<str.length;j++){
            if(str[j]=="a" || str[j]=="e" || str[j]=="i" || str[j]=="o" || str[j]=="u"){
                vow+=str[j]
            }else{
                cons+=str[j]
            }
        }
        console.log(vow+cons);
    }

}
  if (process.env.USERNAME === "sachi") {
    runProgram(`4
    eio
    masaischool
    ubcdefghioel
    rhythm`);
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