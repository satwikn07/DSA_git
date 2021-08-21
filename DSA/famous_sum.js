function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    let [n,k] = input[0].trim().split(" ")
    // console.log(n,k);
    let p =""
    for(let i=0;i<k;i++){
        p+=n
    }
    console.log(+p);
    // console.log(tests);
    if(p<=9){
        console.log(1);
    }else{
        console.log(super_digit(p));
    }
                 
}         
function sum(num){
    if(num<=9){
        return num
    }else{
        return num%10 + sum(Math.floor(num/10))
    }
}

function super_digit(digit){
    let summ = sum(digit)
    if(summ<=9){
         return summ
    }else{
        return super_digit(summ)
   }
}
if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    11 3
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