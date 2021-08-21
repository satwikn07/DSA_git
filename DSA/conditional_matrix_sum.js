function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var first_line=input[0].split(" ").map(Number)
    var rows = first_line[0]
    var columns = first_line[1]
    var arr=[]
    var sum = 0
    var res = ""
    for(let i=1;i<=rows;i++){
        arr.push(input[i].trim().split(" ").map(Number))
    }
    
    for(let j=0;j<columns;j++){
        for(let i=0;i<rows;i++){
            res+=arr[i][j]+" "
        }
        res += "\n"
    }
    console.log(res.trim())
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
