function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/);
    const n = +input[0]
    let inp = input[1].trim().split(" ").map(Number)

    // console.log(n,inp);
    // console.log(name,score);
    // for(let i=0;i<2*n;i++){
    //     for(let j=0;j<2*n-i-1;j++){
    //         if(inp[j+1]<inp[j]){ //swap condition
    //             let temp = inp[j]
    //             inp[j] = inp[j+1]
    //             inp[j+1] = temp
    //         }
    //     }
    // }
    inp.sort((a,b)=>a-b);
    // console.log(inp);
    let ans = 0
    for(let i=0;i<2*n-1;i=i+2){
        // console.log(inp[i],inp[i+1]);
        ans = ans + Math.min(inp[i],inp[i+1])
    }
    console.log(ans);    
    // }
   
}


if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    2
    1 3 1 2
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