function runProgram(input){
    
    input=input.trim().split(/[\r\n]+/)
    var test=+input[0]
    for(let t=0,line=1;t<test;t++){
        var n = +input[line++]
        var inp = input[line++].trim().split(" ").map(Number)
        
    let stack = []
    let ans_left = []
    for(let i=0;i<n;i++){
        while(stack.length!=0 && stack[stack.length-1][0]>=inp[i]){
            stack.pop()
        }
        if(stack.length==0){
            ans_left.push([-1,-1])
        }else{
            ans_left.push(stack[stack.length-1])
        }
        stack.push([inp[i],i])
    }
    // console.log(ans_left);
    let stack_ = []
    let ans_right = []
    for(let i=n-1;i>=0;i--){
        while(stack_.length!=0 && stack_[stack_.length-1][0]>=inp[i]){
            stack_.pop()
        }
        if(stack_.length==0){
            ans_right.push([-1,-1])
        }else{
            ans_right.push(stack_[stack_.length-1])
        }
        stack_.push([inp[i],i])
    }
    ans_right = ans_right.reverse()
    // console.log(ans_right); 
    let final_ans = []
    for(let i=0;i<n;i++){
        if(ans_right[i][0]==-1 && ans_left[i][0]==-1){
            final_ans.push(-1)
        }
        else if (ans_right[i][0]==-1 && ans_left[i][0]!=-1){
            final_ans.push(ans_left[i][0])
        }
        else if(ans_left[i][0]==-1 && ans_right[i][0]!=-1){
            final_ans.push(ans_right[i][0])
        }
        else if((Math.abs(ans_right[i][1]-i)==Math.abs(ans_left[i][1]-i))){
            final_ans.push(ans_left[i][0])
        }
        else if(Math.abs(ans_right[i][1]-i)>Math.abs(ans_left[i][1]-i)){
            final_ans.push(ans_left[i][0])
        }
        else if(Math.abs(ans_right[i][1]-i)<Math.abs(ans_left[i][1]-i)){
            final_ans.push(ans_right[i][0])
        }
    }
    console.log(final_ans.join(" "));     
    }
    
}

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    1
8
39 27 11 4 24 32 32 1
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