function runProgram(input){
    input=input.trim().split(" ").map(Number)
    var n = input[0]
    var m = input[1]
    var count = 0
    for(var x=0;x<=Math.ceil(n**(1/2));x++){
        for(var y=0;y<=Math.ceil(m**(1/2));y++){
            if((x**2 + y)==n && (y**2 + x)==m){
                count+=1
            }
        }
    }
    console.log(count)
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