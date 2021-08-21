function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var tests = +input[0]
    // console.log(tests);
    
    for(let i=0,line=1;i<tests;i++){
        var n = Number(input[line++])
        let arr = []
        let res = ""
        for(let j=0;j<n;j++){
            arr.push(input[line++].trim().split(" ").map(Number))
        }
        for(let row=n-1;row>=0;row--){
            for(let col=n-1;col>=0;col--){
                res += arr[row][col]+" "
            }
            if(row==0){
                res = res.trim()
            }
            else{
                res = res.trim() + "\n"
            }
            
        }
        console.log(res);
        
    }
    

    

}         
         

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    2
    3 
    1 2 3
    4 5 6
    7 8 9
    4
    1 2 3 4
    5 6 7 8
    9 0 1 2
    3 4 5 6
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