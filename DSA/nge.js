function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var tests = +input[0]
    // console.log(tests);
    
    for(let t=0,line=1;t<tests;t++){
        var n = +input[line++]
        let inp = input[line++].trim().split(" ").map(Number)
        // console.log(n,inp);
        let stack = []
        let ans = ""
        for(let i=n-1;i>=0;i--){
            // console.log(inp[i]);
            while(stack.length!=0 && stack[stack.length-1]<=inp[i]){ //vvip, <=, earier i used only < and it was partially accepted
                stack.pop()
            }
            // console.log(stack);
            // console.log(ans);
            stack.length==0? ans = '-1'+" "+ ans: ans = stack[stack.length-1]  + " " + ans
            stack.push(inp[i])
            // console.log(stack);
        }
        console.log(ans);
    }

}         
         

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    1
    4
    1 3 2 4
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