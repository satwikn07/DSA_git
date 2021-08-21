function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var tests = +input[0]
    // console.log(tests);
    for(let line=1,i=1;i<=tests;i++){
        let n = +input[line++]
        let str = input[line++]
        // console.log(n,str.trim());
        let i = 0
        let j = 0
        while(i<n && j<=i){
            
        }
    }
    
}         
         

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    1
    5
    aabba
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