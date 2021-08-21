function runProgram(input) {
    var inp = input.trim().split("\n");
    var n = +inp[0].trim();
    var arr = inp[1].trim().split(" ").map(Number);
    var obj={};
    for(key in arr){
        obj[arr[key]]?obj[arr[key]]++:obj[arr[key]]=1
    }
    var sum=0;
    for(key in obj){
        sum+=+key
    }
    console.log(sum);
}
      if (process.env.USERNAME === "THIS-PC") {
        runProgram(`5
        2 2 2 1 1`);
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