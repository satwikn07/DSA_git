function runProgram(input){
    var result=1
    var count =1
    for(var i=0;i<input.length;i++){
        while(input[i]==input[i+1]){
            count++
            continue
        }
        if(count>=result){
            result = count
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
