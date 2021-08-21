function runProgram(input){

   
   
    
    
        let inp = input.trim().split(" ")
        
        let stack = []
        for(let i=0;i<inp.length;i++){
            if(rev(stack[stack.length-1])!=null){
            if( stack[stack.length-1]==rev(inp[i])){
                stack.pop()
            }
            else{
                stack.push(inp[i])
            }
        }
        else{
            continue
        }
    }
        stack.length==0?console.log('balanced'):console.log('not balanced');
       
}
function rev(char){
    switch(char){
        case ']': return '['
        case '[':return ']'
        case '{':return '}'
        case '}':return '{'
        case '(':return ')'
        case ')':return '('
        default: return null
    }
}
  
         

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    [one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]
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