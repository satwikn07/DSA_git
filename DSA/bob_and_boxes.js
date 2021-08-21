function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var n = +input[0]
    // console.log(n);
    //1,3 and 5 boxes at at time
    console.log(findways(n));
   
}         
function findways(n){
    if(n==1 || n==0 || n==2){
        return 1
    }
    else if(n==3){
        return 2
    }
    else if(n==4){
        return 3
    }
    else{
        return findways(n-5) + findways(n-3) + findways(n-1)
    }
}
if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
   7
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