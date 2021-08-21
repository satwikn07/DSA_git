function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var meta_data=input[0].split(" ").map(Number)
    var rows = meta_data[0]
    var columns = meta_data[1]
    
    var arr = []
     var sum = 0
    for(let x = 1; x <= rows ; x++){
        arr.push(input[x].split(' ').map(Number))
    }
    for(let i = 0 ; i < rows ; i ++){
        for(let j =0 ; j < columns ; j++ ){
            if(arr[i][j]%3==0){
                sum+=arr[i][j]
            }
        }
    }
    console.log(sum)
     
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
