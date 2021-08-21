function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var n = Number(input[0])
    var inp_array = input[1].trim().split(" ")
    console.log(inp_array)
    var max_count = 0
    for(let i=0;i<n;i++){
        if(inp_array[i]%2==1){
            var count = 1
            for(let x=i+1;x<n;x++){
               if(inp_array[x]%2==1){
                   count++
               }
               else{
                   break
               }
        }
        if(count>max_count){
            max_count = count
        }
    }
}
    console.log(max_count)
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
