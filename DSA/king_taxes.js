function runProgram(input) {
    input = input.trim().split("\n")
    var N = +input[0]
    var arr = input[1].trim().split(" ").map(Number)
     var sum =0
    for(let i=0; i<(2*N)-1; i=i+2){
        var max = Math.max(arr[i], arr[i+1])
       sum+= max
    }
    console.log(sum)
 }
   if (process.env.USERNAME === "THIS-PC") {
     runProgram(`2
     1 3 1 2
     `);
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
 