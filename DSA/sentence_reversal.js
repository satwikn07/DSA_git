function runProgram(input){
   input = input.trim().split(" ")
   var sentence = ""
   for(let i = input.length-1; i > 0 ; i--){
       sentence = sentence + input[i] + " " 
   }
   sentence+=input[0]
   console.log(sentence)
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