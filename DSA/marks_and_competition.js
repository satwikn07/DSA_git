function runProgram(input){
    
    input=input.trim().split(/[\r\n]+/)
    var n=+input[0]
    var inp = input[1].trim().split(" ").map(Number)
  
    let stack = []
    let ans = []
    for(let i=n-1;i>=0;i--){
        while(stack.length!=0 && stack[stack.length-1]<=inp[i]){
            stack.pop()
        }
        if(stack.length==0){
            ans.push(inp[i])
        }
        stack.push(inp[i])
        // console.log(stack);
    }
    console.log(ans.reverse().join(" "));   
}

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    6
16 17 4 3 5 2
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