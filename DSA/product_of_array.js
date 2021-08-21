function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var n=+input[0]
    var array=input[1].split(" ").map(Number)       
    console.log(n,array);
    
    const product = (arr,n) => {
        // console.log(arr);
        if (n == 1){
            return arr[n-1]
        }
        else{
            return arr[n-1] * product(arr.slice(0,n-1))
        } 
    }
    console.log(product(array,n));

}

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    5
3 5 2 9 4
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