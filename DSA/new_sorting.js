function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    const [n,num]=input[0].trim().split(" ").map(Number)
    input = input[1].trim().split(" ").map(Number)
    // console.log(input);
    let arr = input.map((e)=>e%num)
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j+1]
                let temp2 = input[j+1]
                arr[j+1]=arr[j]
                input[j+1]=input[j]
                arr[j]=temp
                input[j]=temp2
            }
        }
    }    
    // console.log(arr);
    let res = ""
    for(let x of input){
        res+=x+" "
    }
    console.log(res.trim());
}

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    5 6
12 18 17 65 46
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