function runProgram(input){
    // Write code here
    //Backtracking
    input=input.trim().split(/[\r\n]+/)
    let n = +input[0].trim();
    let arr = input[1].trim().split(" ").map(Number);
    let sum = +input[2].trim()
    Sumexists(arr,n,sum)?console.log('yes'):console.log('no');
}         
function Sumexists(arr,n,sum){
    if(n==0 && sum>0){
        return false
    }
    if(sum==0){
        return true
    }
    if(arr[n-1]>sum){
        return Sumexists(arr,n-1,sum) //not to be considered
    }else{
        return Sumexists(arr,n-1,sum) || Sumexists(arr,n-1,sum-arr[n-1])
        //included                          excluded
    }

}     

if (process.env.USERNAME == "satwi"){
    runProgram(`
    5
    1 2 3 6 9
    16
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