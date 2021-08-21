function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    // console.log(input);
    let ops = +input[0]
    // console.log(ops);
    let stack = [];
    function top(arr){
        if(arr.length==0){
            console.log("Empty!");
        }else{
            console.log(arr[arr.length-1]);
        }
    }
   
    for(let line=1,i=1;i<=ops;i++){
        let inp = input[line++].trim().split(" ")
        // console.log(inp);
        if(inp.length==2){
            stack.push(inp[1])
        }
        else if(inp[0]=="2"){
            if(stack.length==0){
                null
            }
            else{
                stack.pop()

            }
        }
        else{
            top(stack)
        }
        // console.log(stack);
    }
}

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    6
    1 15
    1 20
    2
    3
    2
    3
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