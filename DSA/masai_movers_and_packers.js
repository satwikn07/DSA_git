function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var [k,n] = input[0].trim().split(" ").map(Number)
    var box_capacity = input[1].trim().split(" ").map(Number)
    //1,3 and 5 boxes at at time
    box_capacity.sort()
    console.log(k,n,box_capacity)
}         
function findways(n,arr){
    if(n<arr){
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
    3 3
    1 2 3
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