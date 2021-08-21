function runProgram(input){
    var longest = 0
    for(var i = 0 ; i < input.length ; i++){
       for(let j = input.length; j>i; j--){
           if(isPali(input.substring(i,j))){
               if(input.substring(i,j).length>longest){
                   longest = input.substring(i,j).length
               }
           }
       }
    }
    function isPali(str){
        var rev = "";
        for(let j =str.length-1 ; j >=0  ; j--){
            rev += str[j]
        }
        if(rev == str){
            return true
        }
        else{
            return false
        }
    }
    console.log(longest)

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