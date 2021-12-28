function runProgram(input){
    input=input.trim().split(/[\r\n]+/)
    let n = +input[0];
    let str = input[1].trim();
    let stack = [];
    // console.log(n,str);
    for(let i=0;i<n;i++){
        if(str[i]==top(stack)){
            stack.pop()
        }else{
            stack.push(str[i])
        }
    }
    if(stack.length==0){
        console.log(-1);
    }else{
        console.log(stack.join(""));
    }
}
function top(stack){
   if(stack.length==0){
       return "empty"
   }else{
       return stack[stack.length-1]
   }
}

if (process.env.USERNAME == "satwi"){
    runProgram(`
    5
    aabbc
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