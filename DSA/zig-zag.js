function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var table_info = input[0].trim().split(" ").map(Number)
    var rows = table_info[0]
    var columns = table_info[1]
    var arr = []
    var res = ""
    for(let r=1;r<=rows;r++){
        arr.push(input[r].trim().split(" ")) //2d array is created
    }
    for(var i=0; i<rows ;i++){
        if(i%2==0){
            for(let j=columns-1;j>=0;j--){
                res+=arr[i][j]+" "
            }
        }else{
            for(let j=0;j<columns;j++){
                res+=arr[i][j]+" "
            }
        }

    }
    console.log(res.trim())
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
