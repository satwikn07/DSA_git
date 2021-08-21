function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var n = +input[0]
    for(let i=1;i<=n;i++){
        console.log('*'.repeat(i).trim());
    }
}   

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    4
`);
}
else{

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
}