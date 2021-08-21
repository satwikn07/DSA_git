function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    // console.log(input);
    let n = +input[0]
    // console.log(n);
    // console.log(ops);
    let inp = input[1].trim().split("")
    // console.log(inp);
    let stack = [];
    for(let i=0;i<n;i++){
        if(top(stack)==inp[i]){
            stack.pop()
        }
        else{
            stack.push(inp[i])
        }
    }
    if(stack.length!=0){
        console.log(stack.join(""));

    }
    else{
        console.log(-1);
    }
    function top(arr){
        if(arr.length==0){
            return "Empty!";
        }else{
            return (arr[arr.length-1]);
        }
    }
    
   
        // console.log(stack);
    
}

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    12
abbabaadcbbc
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