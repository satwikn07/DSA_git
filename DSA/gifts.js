function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var tests = +input[0]
    // console.log(tests);
    
    for(let i=0,line=1;i<tests;i++){
        var n = Number(input[line++])
        let arr = input[line++].trim().split(" ").map(Number)
        // console.log(n,arr);
        let i =0
        let j=0
        count =1
        while(i<=j && j<n){
            if(arr[i]!=arr[j])
        }
    }
    

    

}         
         

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    3
    8
    1 2 1 3 2 7 4 2
    5
    1 2 1 3 4
    4
    1 2 2 1
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