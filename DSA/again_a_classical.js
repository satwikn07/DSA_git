function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var tests = +input[0]
    // console.log(tests);
    function top(arr){
        return arr[arr.length-1]
    }
    function rev(char){
        if(char=="{"){
            return "}"
        }
        if(char=="}"){
            return "{"
        }
        if(char=="["){
            return "]"
        }
        if(char=="]"){
            return "["
        }
        if(char=="("){
            return ")"
        }
        if(char==")"){
            return "("
        }
    }
            
    for(let i=0,line=1;i<tests;i++){
        const arr = input[line++].trim().split("")
        var stack = []
        
        for(let i=0;i<arr.length;i++){
            if((top(stack))==rev(arr[i])){
                stack.pop()
            }else{
                stack.push(arr[i])
            }
        }
        console.log(stack.length==0?"balanced":"not balanced");
    }
    
}         
     

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
3
{([])}
()
([]
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