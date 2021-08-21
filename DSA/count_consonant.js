function runProgram(input){
    input = input.trim()
    var count = 0
    for(let i = 0 ; i<input.length ; i++){
        
        if(!isVowel(input[i])){
            count+=1
        }
    }
    console.log(count)
    function isVowel(ch){
        if(ch=="a"|| ch=="e" || ch=="i" || ch=="o" || ch=="u"){
            return true
        }
        else{
            return false
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