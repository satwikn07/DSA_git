function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    let str = input[0].trim().split("")
    
    const length_str = (str) => {
        if(str[0]=="" || str[0]==undefined){
            return 0
        }else{
            str.pop();
            return 1 + length_str(str) 
        }
    }
    console.log(length_str(str)); 

}

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    masaischool
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