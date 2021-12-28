function runProgram(input){
    // Write code here
    //importance of localCompare function and substring function
    input=input.trim().split(/[\r\n]+/)
    let n = +input[0];
    let str = input[1];
    // console.log(n,str);
    let max = "";
    for(let i=0;i<n;i++){
        if(str.substring(i).localeCompare(max)>0){
            max = str.substring(i)
        }
    }
    console.log(max);
}


if (process.env.USERNAME == "satwi"){
    runProgram(`
    6
ababaa
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