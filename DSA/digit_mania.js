function runProgram(input) {
    var inp = input.trim().split("\n");
    var test = +inp[0].trim();
    for(let t=0,line=1;t<test;t++){
        let [n,k] = inp[line++].trim().split(" ").map(Number);
        let arr = inp[line++].trim().split(" ");
        var count=0,el=""
        for(let i=0;i<n;i++){
            let c=0;
            for(let j=0;j<arr[i].length;j++){
                if(arr[i][j]==k){
                    c++
                }
            }
            if(c>count){
                count=c;
                el=arr[i]
            }
            if(c==count){
                el=Math.max(+el,+arr[i])
            }
        }
        console.log(el);

    }
}
  if (process.env.USERNAME === "THIS-PC") {
    runProgram(`2
    5 2
    222 2221 12221 2222 12
    5 2
    222 2221 12221 2212 12`);
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