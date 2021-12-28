function runProgram(input){
    input=input.trim().split(/[\r\n]+/)
    let n = +input[0].trim();
    let str = input[1].trim();
    // console.log(n,arr);
    let out = "";
    console.log(subsequence(str,out));
}     
function subsequence(inp,out){
    if (inp ==""){
        console.log(out);
        return
    }
    subsequence(inp.substring(1),out+inp[0])
    subsequence(inp.substring(1),out)
}
if (process.env.USERNAME == "satwi"){
    runProgram(`
    4
abcd
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