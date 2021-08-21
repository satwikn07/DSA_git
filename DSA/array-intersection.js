function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var n = Number(input[0])
    var arr1 = input[1].split(" ")
    var arr2 = input[2].split(" ")

    for(var i=0;i<n;i++){
        for(var j=0;j<n;j++){
            if(arr1[i]==arr2[j]){
                console.log(arr1[i])
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
