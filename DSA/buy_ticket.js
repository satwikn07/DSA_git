function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var n=+input[0]
    let queue = []
    for(let i=1;i<=n;i++){
        let op = input[i].trim().split(" ")
        if(op[0]=="E"){
            queue.push(op[1])
            console.log(queue.length);
        }else{
            if(queue.length==0){
                console.log(-1,queue.length);
            }
            else{
                console.log(queue.shift(),queue.length);
            }
        }
    }
    
}

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    5
E 2
D
D
E 3
D
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