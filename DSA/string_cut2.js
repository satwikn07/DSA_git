function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    let word = input[0].trim()

    console.log(reverse_cut(word,word.length));
}
function reverse_cut(str,n){
    if(str.length==1){
        return str
    }
    if(str.length<=Math.ceil(n/2)){
        return str.split("").reverse().join("")
    }
    if(n%2==1){
        return reverse_cut(str.slice(0,Math.ceil(n/2)),n) + str.slice(Math.ceil(n/2),Math.ceil(n/2)+1) +reverse_cut(str.slice(Math.ceil(n/2)+1,n),n)
    }
    return reverse_cut(str.slice(0,Math.ceil(n/2)),n) + reverse_cut(str.slice(Math.ceil(n/2),n),n)
}

if (process.env.USERNAME == "satwi"){
    runProgram(`
    abcxy
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