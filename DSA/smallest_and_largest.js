function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    let n = +input[0]
    let arr = input[1].trim().split(" ").map(Number)
    // console.log(n,arr);
    let greatest = (arr,n) =>{
        if(n==1){
            return arr[0]
        }else{
            return (greater(arr[0],greatest(arr.slice(1,n),n-1)))
        }
    }
    let smallest = (arr,n) =>{
        if(n==1){
            return arr[0]
        }else{
            return (smaller(arr[0],smallest(arr.slice(1,n),n-1)))
        }
    }
    console.log(smallest(arr,n));

    console.log(greatest(arr,n));

}
let smaller = (a,b)=>{
    if(a<b){    
        return a
    }else{
        return b
    }
}
let greater = (a,b) => {
    if(a>b){
        return a
    }else{
        return b
    }
}
if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    4
-2 0 8 4
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