function runProgram(input) {
    var inp = input.trim().split("\n");
    var test = +inp[0]
    let arr =[];
    for(let i=1;i<=test;i++){
       console.log(code(inp[i]));
    }

    function code(str){
        let res = 0;
        for(let i=0;i<str.length;i++){
            res*=26;
            res+=str[i].charCodeAt(0)-"A".charCodeAt(0)+1;
        }
        return res
    }
}
      if (process.env.USERNAME === "THIS-PC") {
        runProgram(`3
        A
        AB
        ZY`);
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