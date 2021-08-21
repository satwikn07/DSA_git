function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    // var first_line=input[0].split(" ").map(Number)
    var n = Number(input[0])
    var arr = []
    var obj = {}
    var sum =0
    var dia_sum = 0
    for(let i=1;i<=n;i++){
        arr.push(input[i].trim().split(" ").map(Number))
    }
    // console.log(arr)
    // console.log(n)
   
    for(let i=0;i<n;i++){
        sum += arr[0][i]
    }
    for(let i=0;i<n;i++){
        sum += arr[n-1][i]
    }            
    for(let i=1;i<n-1;i++){
        sum+= arr[i][0]
    }
    for(let i=1;i<n-1;i++){
        sum+= arr[i][n-1]
    }
    for(let i=1;i<n-1;i++){
        if(i+i!=(n-1)){
            dia_sum+=arr[i][i]
        }
        // obj[arr[i][i]]=arr[i][i]
    }
    for(let i = 1;i<n-1;i++){
        for(let j=1;j<n-1;j++){
            if(i+j==(n-1)){
                dia_sum+=arr[i][j]
                // obj[arr[i][j]]=arr[i][j]
            }
        }
    }
    console.log(sum+dia_sum)
    // console.log(dia_sum)
}
if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    5
1 2 3 4 5
6 7 8 9 1
2 3 4 5 6
7 8 9 1 2
3 4 5 6 7
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