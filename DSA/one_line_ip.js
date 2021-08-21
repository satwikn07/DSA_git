function runProgram(input){
    var input = Number(input)
    if(input%35==0 && input!=0){
        console.log("Masai School")
    }else if(input%5==0 && input!=0){
        console.log("School")
    }
    else if(input%7==0 && input!=0){
        console.log("Masai")
    }
    else{
        console.log("Hurray!")
    }

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
