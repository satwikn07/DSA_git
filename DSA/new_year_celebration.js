function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var n=+input[0]
    let queue = []
    let stack = []
    for(let i=1;i<=n;i++){
        let op = input[i].trim().split(" ")
        switch(op[0]){
            case "1":
                queue.push(op[1])
                break;
            case "2":
                stack.push(op[1])
                break;
            case "3":
                if(queue.length==0){
                    console.log(-1);
                }
                else{
                    console.log(queue[0]);
                }
                 
                break; 
            case "4":
                if(stack.length==0){
                    console.log(-1);
                }else{
                    console.log(stack[stack.length-1]);

                }
                break;
            case "5":
                stack.push(queue.shift())
                break;
            default:
                null             
        }
    }
    
}

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    7
1 4
2 3
1 2
3
4
5
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