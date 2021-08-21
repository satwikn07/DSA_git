    function runProgram(input){
        // Write code here
        input=input.trim().split(/[\r\n]+/)
        var n=Number(input[0])
        var arr1=[]
        var res = ""
        for(let i=1;i<=n;i++){
            arr1.push(input[i].trim().split(" "))
        }
        for(let j=n-1;j>=0;j--){
            for(let i=0;i<n;i++){
                res += arr1[i][j]+" " 
            }
            res += "\n"
        }
        console.log(res.trim())
    
    }

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
