function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var tests = +input[0]
    // console.log(tests);
    
    for(let t=0,line=1;t<tests;t++){
        var n = +input[line++]
        var arr = input[line++].trim().split(" ").map(Number)
        // console.log(n,arr);
        let obj = {}
        for(let i=0;i<n;i++){
            
        }
    }
    
      

}         
         

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    2
5
1 1 1 1 1
6
1 1 2 2 4 1 
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