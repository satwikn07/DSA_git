function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var tests = +input[0]
    // console.log(tests);
    
    for(let t=0,line=1;t<tests;t++){
        var n = Number(input[line++])
        let arr = input[line++].trim().split("")
        let obj = {}
        for(let x=0;x<n;x++){
            if(obj[arr[x]]){
                obj[arr[x]] = obj[arr[x]] + 1
            }
            else{
                obj[arr[x]] = 1
            }
        }
        if(obj['L']==obj['R'] && obj['U']==obj['D']){
            console.log('Yes');
        }
        else{
            console.log('No');
        }
    }
    
    
}         

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    2
    5
    RLRUD
    4
    LRUD
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