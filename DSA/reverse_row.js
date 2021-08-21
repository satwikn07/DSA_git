function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var n = Number(input[0])
    var arr=[]
    var res = ""
    for(let i=1;i<=n;i++){
        arr.push(input[i].trim().split(" "))
    }
    for(let i=0;i<n;i++){
        for(let j=n-1;j>=0;j--){
            res += arr[i][j]+" "
        }
        res+="\n"
    }
    
    console.log(res)          
    
}

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
});
