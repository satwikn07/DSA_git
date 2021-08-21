function runProgram(input){
    // Write code here
    input=input.trim().split("")
    // console.log(tests);
    function top(arr){
        return arr[arr.length-1]
    }
    function rev(char){
        if(char=="{"){
            return "}y"
        }
        if(char=="}"){
            return "{n"
        }
        if(char=="["){
            return "]y"
        }
        if(char=="]"){
            return "[n"
        }
        if(char=="("){
            return ")y"
        }
        if(char==")"){
            return "(n"
        }
        else{
            return 1
        }
    }
        var stack = []
        
        for(let i=0;i<input.length;i++){
            if(rev(input[i])==1){
                null
            }
            else{
                if((top(stack))==rev(input[i])[0] && rev(input[i])[1]=="n"){
                    stack.pop()
                }else if(rev(input[i])[1]=='y'){
                    stack.push(input[i])
                }else{
                    null
                }
            }
            
        }
        console.log(stack.length==0?"balanced":"unbalanced");
}
    
      
     

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
{(one()three)}
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