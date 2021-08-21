function runProgram(input) {
    var inp = input.trim().split("\n");
    var test = +inp[0].trim();
    for(let t=0,line=1;t<test;t++){
        let str1 = inp[line++].trim()
        let str2 = inp[line++].trim()
        console.log(str1,str2);
    }
}
function anagram(str1,str2){
   
}
  if (process.env.USERNAME === "THIS-PC") {
    runProgram(`2
    abcd
    dcab
    aa
    aaa`);
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