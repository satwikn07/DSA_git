function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    // console.log(input);
    let ops = +input[0]
    // console.log(ops);
    let stack = [];
    function customer(arr){
        if(arr.length==0){
            console.log("No Food");
        }else{
            console.log(arr[arr.length-1]);
            arr.pop()
        }
    }
   
    for(let line=1,i=1;i<=ops;i++){
        let inp = input[line++].trim().split(" ")
        // console.log(inp);
        if(inp.length==2){
            stack.push(inp[1])
        }
        else {
            customer(stack)
        }
        // console.log(stack);
    }
}

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    6
    1
    2 5
    2 7
    2 9
    1
    1
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