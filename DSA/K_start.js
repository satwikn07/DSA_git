//time complexity O(n)
function runProgram(input){
    input=input.trim().split(/[\r\n]+/)
    var tests = +input[0]
    
    for(let i=0,line=1;i<tests;i++){
        let ans = 0
        var n = +input[line++]
        var word = input[line++].trim()
        var k = input[line++].trim()
        // console.log(word,k,n);
        for(let j=0;j<n;j++){
            if(word[j]==k){
                ans += (n-j)
            }
        }
        console.log(ans);
    }

}         
         

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    1
    4
    aman
    a
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