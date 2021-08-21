function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var tests = +input[0]
    // console.log(tests);
    
    for(let t=0,line=1;t<tests;t++){
        var n = +input[line++]
        let arr = input[line++].trim().split(" ").map(Number)
        // console.log(n,arr);
        let obj = {}
        let stack = []
        for(let i=0;i<n;i++){
            let count = 1
            if(stack.length==0){
                stack.push(arr[i])
                obj[arr[i]]=count
            }else{
                while(top(stack)<=arr[i]){
                    count += obj[top(stack)]
                    stack.pop()
                }
                stack.push(arr[i])
                obj[arr[i]]=count
            }
        }
        // console.log(obj,stack);
        let ans = ""
        for(let i=0;i<n;i++){
            ans += obj[arr[i]] + " "
        }
        console.log(ans.trim());
    }
    function top(arr){
        if(arr.length==0){
            return "Empty!";
        }else{
            return (arr[arr.length-1]);
        }
    }

    

}         
         

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    1
    6
    100 60 70 65 80 85
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