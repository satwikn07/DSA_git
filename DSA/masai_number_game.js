function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var n=+input[0]
    let inp = []
    // console.log(n);
    for(let i=1;i<=n;i++){
        inp.push(+input[i])
    }
    // console.log(inp);
    let stack = []
    let NGE = []
  
    for(let i=n-1;i>=0;i--){ //for the next greater element
            // console.log(inp[i]);
            while(stack.length!=0 && stack[stack.length-1][0]<=inp[i]){ //vvip, <=, earier i used only < and it was partially accepted
                stack.pop()
            }
            // console.log(stack);
            // console.log(ans);
            if(stack.length==0){
                NGE.push([-1,-1])
               
            }else{
                NGE.push(stack[stack.length-1])
                
            } 
            stack.push([inp[i],i]) //pushing index for tracking(modification for this problem)
            // console.log(stack);
    }
    NGE = NGE.reverse()
    // console.log(NGE,inp);
    let stack2 = []
    let NSE = []
    for(let i=n-1;i>=0;i--){ //for finding next smaller element
        while(stack2.length!=0 && stack2[stack2.length-1]>=inp[i]){
            stack2.pop()
        }
        if(stack2.length==0){
            NSE.push(-1)
        }else{
            NSE.push(stack2[stack2.length-1])
        }
        stack2.push(inp[i])
        
    }
    NSE = NSE.reverse()
    // console.log(NSE);
    let ans = []
    for(let i=0;i<NGE.length;i++){
        if(NGE[i][0]==-1){
            ans.push(-1)
        }else{
            ans.push(NSE[NGE[i][1]])
        }
    }
    console.log(ans.join(" "));
}

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    8
3
7
1
7
8
4
5
2
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