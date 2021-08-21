function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var t = +input[0]
    const [n,k]= input[0].split("").map(Number)
    const word = input[1]
    let i = 0
    let obj = {}
    // console.log(word.length);
    while(i<word.length){
        obj[word[i]] = obj[word[i]]?obj[word[i]]+1:1
        i++
    } 
    console.log(obj);
}         

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    4 2
abcc
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