function runProgram(input){
    var num = Number(input)
    var flag=1
    if(num==1 || num ==0){
        console.log("No")
    }
    else{
        for(var i=2;i<num;i++){
            if(num%i==0){
                console.log("No")
                flag=0
                break
            }
        }
        if(flag){
            console.log("Yes")
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