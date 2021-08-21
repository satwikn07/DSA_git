function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var tests = +input[0]
    // console.log(tests);
    
    for(let i=0,line=1;i<tests;i++){
        var n = +input[line++]
        let arr = []
        for(let i=0;i<n;i++){
            arr.push(input[line++].trim().split(""))
        }
        // console.log(arr);
        // let top = 0
        // let bottom = n-1
        // let left = 0
        // let right = n-1
        let hor,ver;
        for(let i=0;i<n;i++){
            for(let j=0;j<n;j++){
                if(arr[i][j]==arr[n-1-i][j]){
                    hor=1
                }
                else{
                    hor=0
                    break
                }
            }
        }
        for(let j=0;j<n;j++){
            for(let i=0;i<n;i++){
                if(arr[i][j]==arr[i][n-1-j]){
                    ver=1
                }
                else{
                    ver=0
                    break
                }
            }
        }
        if(ver && hor){
            console.log("BOTH");
        }
        else if(ver){
            console.log("VERTICAL");
        }
        else if(hor){
            console.log("HORIZONTAL");
        }
        else{
            console.log("NO");
        }
       
}
}         
         

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    3
    4
    *.*.
    .*.*
    *.*.
    .*.*
    3
    .*.
    *.*
    .*.
    3
    ..*
    **.
    ..*
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