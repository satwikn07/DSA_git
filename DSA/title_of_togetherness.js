function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var [x,y] = input[0].trim().split(" ").map(Number)
    let Ron = x;
    let Harry = [y];
    while(!Harry.includes(Ron)){
        if(Ron>Harry[Harry.length-1]){
            break;
        }
        Ron = Ron + sum(Ron);
        Harry.push(Harry[Harry.length-1]+sum(Harry[Harry.length-1]));
    }
    console.log(Ron);
}         
function sum(num){
    if(num<=9){
        return num
    }else{
        return num%10 + sum(Math.floor(num/10))
    }
}

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    32 47
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