function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var tests = +input[0]
    // console.log(tests);
    for(let i=0,line=1;i<tests;i++){
        var [rows,cols] = input[line++].trim().split(" ").map(Number)
        var mat =[]
        for(let j=0;j<rows;j++){
            mat.push(input[line++].trim().split(' ').map(Number))

        }
        // console.log(mat)
        var top = 0
        var bottom = rows - 1
        var left = 0
        var right = cols -1
        var res = ""
        while(bottom >= top && left<=right){
            for(let i=top;i<=bottom;i++){
                res += mat[i][left]+" "
            }
            left++;
            for(let j=left;j<=right;j++){
                res += mat[bottom][j]+ " "
            }
            
            bottom--;
        }
        console.log(res.trim())
    }

}         
         

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    2
    3 3
    1 2 3
    4 5 6
    7 8 9
    4 3
    1 2 3
    4 5 6
    7 8 9
    10 11 12
  `);
}
else{

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
}