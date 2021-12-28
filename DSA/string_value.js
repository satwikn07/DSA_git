function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    str = input[0];
    // console.log(str);
    let ans = 0;
    for(let i=0;i<str.length;i++){
        ans += (str.charCodeAt(i)-96)
    }
    console.log(ans);
}


if (process.env.USERNAME == "satwi"){
    runProgram(`
    aba
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