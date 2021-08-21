function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var n=+input[0]
    var arr=input[1].trim().split("")
    
    var stack = []
    for(let i=0;i<arr.length;i=i+2){
        
        if(top(stack)==arr[i]){
            stack.pop()
        }
        else{
            stack.push(arr[i])
        }
        
    }
    if(stack.length==0){
        console.log('yes');
    }else{
        console.log('no');
    }
     
}
function top(arr){
    return arr[arr.length-1]
}

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    6
    abcdcfa
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