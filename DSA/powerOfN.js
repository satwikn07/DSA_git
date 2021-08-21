function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var test_cases = Number(input[0])
    arr=[]
    for(let i=1;i<=test_cases;i++){
        arr.push(Number(input[i].trim()))
    }
    for(let el of arr){
        while(el>2 && el%2==0){
            el = el/2
        }
        if(el==2){
            console.log("True")
        }else{
            console.log("False")
        }
    }
}         
         

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    3
32
64
128
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