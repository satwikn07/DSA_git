function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    let test_cases = +input[0]
    for(let i=1;i<=test_cases;i++){
        let arr = input[i].split(" ").map(Number)
        let sum = 0
        for(let j=0;j<arr.length;j++){
            sum += arr[j]
        }
        if(sum%3==0){
            console.log("Yes");
        }else{
            console.log("No");
        }
    }
    
}         
         

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    4
5 3 1 9 
100 101 102 105 
10 20 15 14 
101 101 101 3
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