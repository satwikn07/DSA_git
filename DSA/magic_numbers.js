function runProgram(input){
    input=input.trim()
    var flag = 1
    for(let i = 0; i < input.length;i++){
        if(input[i]=="4" || input[i]=="7"){
            continue
        }
        else{
            flag=0 
        }
    }
    if(flag){
        console.log("YES")
    }
    else{
        if(Number(input)%4==0 || Number(input)%7==0){
            console.log("YES")
        }
        else{
            console.log("NO")
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