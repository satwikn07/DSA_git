function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    let n = +input[0];
    let str = input[1];
    let rev = "";
    for(let i=n-1;i>=0;i--){
        rev += str[i]
    }
    rev==str? console.log('Yes'):  console.log('No');
}


if (process.env.USERNAME == "satwi"){
    runProgram(`
    6
nrupul
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