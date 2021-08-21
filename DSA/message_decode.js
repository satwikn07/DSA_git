function runProgram(input){
    var result=0
    var count = 1
    for(var i=0;i<input.length;i++){
        
        if(input[i]==input[i+1]){
            count++
            continue
        }
        else{
            if(count>result){
                result = count
            }
            count=1
        }

    }
    console.log(result)
}
// if(process.env.USERNAME==="THIS-PC"){
//     runProgram(`Test Case`)
// }
// else{

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
// }
