    function runProgram(input) {
        //TC = O(n^2)
        //SC = O(1)
        // let inp = input.trim().split("\n");
        // let [n,t] = inp[0].trim().split(" ").map(Number);
        // let arr = inp[1].trim().split(" ").map(Number);
        // let count = 0;
        // for(let i=0;i<n;i++){
        //     for(let j=i+1;j<n;j++){
        //         if(arr[i]+arr[j]==t){
        //             count++;
        //         }
        //     }
        // }
        //TC = O(n)
        //SC = O(n)
        let inp = input.trim().split("\n");
        let [n,t] = inp[0].trim().split(" ").map(Number);
        let arr = inp[1].trim().split(" ").map(Number);
        let count = 0;
        let obj = {}
        for(let i=0;i<n;i++){
            if(obj[t-arr[i]]){
                count+=obj[t-arr[i]]
                obj[arr[i]]?obj[arr[i]]++:obj[arr[i]]=1
            }else{
                obj[arr[i]]?obj[arr[i]]++:obj[arr[i]]=1
            }
        }
        console.log(count);
    }
    if (process.env.USERNAME === "satwi") {
        runProgram(`5 0
        -1 1 -1 1 -1`);
    } else {
        process.stdin.resume();
        process.stdin.setEncoding("ascii");
        let read = "";
        process.stdin.on("data", function (input) {
        read += input;
        });
        process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
        });
        process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
        });
    }