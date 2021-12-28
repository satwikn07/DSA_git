function runProgram(input){
    input=input.trim().split(/[\r\n]+/)
    let test = +input[0].trim();
    for(let t=0,line=1;t<test;t++){
        let n = +input[line++].trim();
        let arr = input[line++].trim().split(" ").map(Number)
        // console.log(n,arr);
        let ans = [1,2];
        let obj = {}
        for(let i=0;i<n;i++){
            obj[arr[i]]?obj[arr[i]]++:obj[arr[i]]=1
        }
        for(let i=1;i<=n;i++){
            obj[i]?obj[i]==2?ans[1]=i:null:ans[0]=i;
        }
        console.log(ans.join(" "));
    }
}     

if (process.env.USERNAME == "satwi"){
    runProgram(`
    3
5
1 2 3 3 4
2
1 1
3
1 2 2
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