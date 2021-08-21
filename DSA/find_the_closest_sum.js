function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var tests = +input[0]
    // console.log(tests);
    //We dont know for 3 elements
    for(let t=0,line=1;t<tests;t++){
        let [n,t] = input[line++].trim().split(" ").map(Number)
        let arr = input[line++].trim().split(" ").map(Number)
        console.log(n,t,arr);
        if(n<3){
            console.log('Invalid Input');
        }
            
    }

}         
         

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    2
4 1
-1 2 1 -4
3 1
0 0 0
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