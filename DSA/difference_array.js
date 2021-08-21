function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var tests = +input[0]
    // console.log(tests);
    
    for(let t=0,line=1;t<tests;t++){
        var n = +input[line++]
        var arr = input[line].trim().split(" ").map(Number)
        var arr1 = input[line++].trim().split(" ").map(Number)
        var ans = []
        // console.log(arr);
        for(let i=0;i<arr.length-1;i++){
            for(let j=0;j<n-i-1;j++){
                if(arr[j]>arr[j+1]){//swap
                    let temp = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = temp
                }
            }
        }
        for(let i=0;i<arr1.length;i++){
            ans.push(i-arr.indexOf(arr1[i]))
        }
        console.log(ans.join(" "));
    }

}         
         

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    2
    5 
    1 4 2 3 5
    5
    5 4 3 2 1
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