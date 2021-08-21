function runProgram(input) {
    var input = input.trim().split("\n");
    var test = +input[0].trim();
    for(let t=0,line=1;t<test;t++){
        let n = +input[line++].trim();
        let arr = input[line++].trim().split(" ").map(Number);
//        console.log(n,arr);
        let stack = [0];
        let ans = [1];
        for(let i=1;i<n;i++){
            let count =1;
            while(stack.length!==0 && arr[stack[stack.length-1]]<=arr[i]){
                let temp = stack.pop();
                count+=ans[temp];
            }
            ans[i]=count;
            stack.push(i);
        }
        console.log(ans.join(" "));
    }

}
      if (process.env.USERNAME === "sachi") {
        runProgram(`2
        7
        100 80 60 70 60 75 85
        5
        3 5 0 9 8`);
      } else{
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
        })
    }