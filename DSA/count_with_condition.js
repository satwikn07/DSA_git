function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    let [n,sum] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    // console.log(n,sum,arr);
    console.log(sub_array_count(arr,n,sum));

}         
const sub_array_count = (arr,n,sum) =>{
    if(sum==0) return 1;
    if(n==0) return 0;
    if(arr[n-1]>sum) return sub_array_count(arr,n-1,sum);
    else return sub_array_count(arr,n-1,sum) + sub_array_count(arr,n-1,sum-arr[n-1])
}       

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    4 10
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