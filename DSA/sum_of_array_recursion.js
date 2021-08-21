function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var tests = +input[0]
    // console.log(tests);
    
    for(let t=0,line=1;t<tests;t++){
        var n = +input[line++]
        let arr = input[line++].trim().split(" ").map(Number)
        // console.log(arr,n);
        console.log(add(arr,n));
        
    }
    function add (arr,n){
        // console.log(arr);
        if(n==1){
            return 0
        }else{
            // console.log(arr[0],arr[1]);
            return Math.abs(arr[0]-arr[1]) + add(arr.slice(1,arr.length),n-1)
        }
    }             
}         

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    2
    3
    1 5 2
    5
    3 5 6 1 8
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