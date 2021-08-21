function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var tests = +input[0]
    // console.log(tests);
    
    for(let t=0,line=1;t<tests;t++){
        let arr = input[line++].trim().split(" ").map(Number)
        // console.log(arr);
        console.log(GCD(arr[0],arr[1]));
    }
                 
}         
function GCD(x,y){
    if(y==0){
        return x
    }
    return GCD(y,x%y)
}
if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    2
6 9
2 25
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