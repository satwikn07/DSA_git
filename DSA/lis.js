function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var tests = +input[0]
    // console.log(tests);
    
    for(let i=0,line=1;i<tests;i++){
        var n = Number(input[line++])
        let arr = input[line++].trim().split(" ").map(Number)
        let lar_count = 1
        let count =1
        for(let x=1;x<n;x++){
            if(arr[x]>arr[x-1]){
                count++
                if(count>lar_count){
                    lar_count=count
                }
                continue
            }
            else{
                count=1
            }
        }
        console.log(lar_count);
    }
    

    

}         
         

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
2
2
1 2
6
1 2 1 2 3 4
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