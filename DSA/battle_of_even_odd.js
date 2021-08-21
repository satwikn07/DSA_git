function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var n = +input[0].trim()
    var arr = input[1].trim().split(" ").map(Number)
    let even_sum = 0;
    let odd_sum = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==1){
            odd_sum+=arr[i]
        }else{
            even_sum+=arr[i]
        }
    }
    if(even_sum<odd_sum){
        console.log('Odd');
    }else{
        console.log('Even');
    }
}

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    4
1 2 3 4
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