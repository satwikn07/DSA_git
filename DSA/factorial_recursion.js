function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    let n = +input[0]
    // console.log(n);
    let factorial = (n) => {
        if(n==0){
            return 1
        }
        if(n==1){
            return 1
        }
        else{
            return  n * factorial(n-1)
        }
    }
    console.log(factorial(n));
}

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    5
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