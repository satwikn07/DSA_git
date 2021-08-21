function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var tests = +input[0]
    // console.log(tests);
    
    for(let t=0,line=1;t<tests;t++){
        var [n,b] = input[line++].trim().split(" ").map(Number)
        let arr = input[line++].trim().split(" ").map(Number)
        // console.log(n,b,arr);
        arr1 = arr
        arr.sort((a, b) => (a-b))
        // console.log(arr);
        let i=0;
        let j=n-1;
        let cond = true
        while(i<=j){
            if(arr[i]+arr[j]===b){
                cond = false
                console.log(i,j);
                break
            }
            if(arr[i]+arr[j]>b){
                j--
            }
            if(arr[i]+arr[j]<b){
                i++
            }
        }
        if(cond){
            console.log(-1,-1);
        }

    }
}         
         

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    3
    4 9
    11 2 7 15
    5 10
    1 2 3 5 5
    2 100
    48 49
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