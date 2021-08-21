function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var n=+input[0]
    let queue = []
    
    for(let i=1;i<=n;i++){
        let op = input[i].trim().split(" ")
        // console.log(op);
        switch(op[0]){
            case 'E':
                let t = -1;
                if(queue.length==0){
                    queue.push([op[1],op[2]])
                    // console.log(queue);
                }else{
                    for(let j=queue.length-1;j>=0;j--){
                        if(queue[j][0]==op[1]){
                            t = j
                            break;
                        }
                    }
                   
                    if(t==-1){
                        queue.push([op[1],op[2]])
                        // console.log(queue);
                    }else{
                        let a = queue.slice(0,t+1)
                        let b = queue.slice(t+1,queue.length)
                       
                        // console.log(a,b);
                        a.push([op[1],op[2]])
                        queue = [...a,...b]
                        // console.log(queue);
                    }
                }
                break;
            case 'D':
                console.log(queue.shift().join(" "));
                break;
        }
    }
    
}

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    5
E 1 1
E 2 1
E 1 2
D
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