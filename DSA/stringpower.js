function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var tests = +input[0]
    // console.log(tests);
    
    for(let t=0,line=1;t<tests;t++){
        let arr = input[line++].trim().split("")
        // console.log(arr);
        let ans = 0
        let count = 1
        for(let i=1;i<arr.length;i++){
            if(arr[i]==arr[i-1]){
                count ++
                ans = count>ans?count:ans
            }
            else{
                ans = count>ans?count:ans
                count = 1
            }
        }
        console.log(ans);

    } 

}         
         

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    4
    aaaaaa
    aaabbb
    asd
    aabbcc
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