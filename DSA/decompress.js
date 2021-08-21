function runProgram(input){
    // Write code here
    input = input.trim()
    var str =""
    for(let i=0;i<input.length;i++){
        if(+input[i]){
            for(let j=0;j<Number(input[i])-1;j++){
                str+=input[i-1]
            }
        }else{
            str+=input[i]
        }
    }
    console.log(str);
}  
//NaN is considered false inside if condition       
         

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    a3b2
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