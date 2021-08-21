function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    let n = +input[0]
    // console.log(n);
    let fibonacci = (n) => {
        if(n==0){
            return 0
        }
        if(n==1){
            return 1
        }
        else{
            return fibonacci(n-1) + fibonacci(n-2)
        }
    }
    console.log(fibonacci(n));
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