function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var n = +input[0]
    var arr = input[1].split(" ").map(Number)
    // console.log(n,arr);
    for(let i=0;i<n;i++){
        i_min = i
        rest_min = arr[i+1]
        rest_min_index = i+1
        for(let j=i+1;j<n;j++){
            if(arr[j]<rest_min){
                rest_min = arr[j]
                rest_min_index = j
            }
        }
        if(rest_min<arr[i_min]){
            let a = 0
            a=arr[i_min]
            arr[i_min] = arr[rest_min_index]
            arr[rest_min_index] = a
        }
    }
    console.log(arr.join(" "));
}
if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    5
3 5 0 9 8
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