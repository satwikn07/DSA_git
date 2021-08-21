function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var t = Number(input[0])
    var real_inputs=[]
    for(let i = 1 ; i <= t ; i++){
        real_inputs.push(input[i])
    }
    for(let i = 0 ; i < real_inputs.length ; i++){
        var n = Number(real_inputs[i])
        for(var j = 1 ; j <= n ; j ++){
            if (j%15==0){
                console.log("FizzBuzz")
            }
            else if(j%3==0){
                console.log("Fizz")
            }
            else if(j % 5 ==0 ){
                console.log("Buzz")
            }
            else{
                console.log(j)
            }
        }
    }
    
}

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
