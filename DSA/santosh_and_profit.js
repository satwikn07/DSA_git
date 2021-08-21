function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var tests = +input[0]
    // console.log(n);
    //1,3 and 5 boxes at at time
    for(let t=0,line=1;t<tests;t++){
        let n = +input[line++]
        console.log(findways(n,0));
    }
}         
function findways(n,k){
    if(n==k){
        return 1
    }
    if(n<k){
        return 0
    }
    else{
        return findways(n,k+4) + findways(n,k+8)
    }
}
if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    1
   12
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