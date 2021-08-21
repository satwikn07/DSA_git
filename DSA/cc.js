function runProgram(input){
    // Write code here
    let arr = input.trim().split("")
    let prev_ele = arr[0]
    let count = 0
    let res = ""
    for(let i=0;i<=arr.length;i++){
        // console.log(arr[i]);
        if(arr[i]==prev_ele){
            count++
        }
        else{
            res += (prev_ele+count)
            prev_ele=arr[i]
            count = 1
        }
    }
    console.log(res);
}         
         

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    aaabbbbcc
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
