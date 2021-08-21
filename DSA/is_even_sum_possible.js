function runProgram(input) {
    var inp = input.trim().split("\n");
    var test = +inp[0].trim();
    for(let t=0,line=1;t<test;t++){
        var flag=true;
        let n = +inp[line++].trim();
        let arr = inp[line++].trim().split(" ");
        for(let i=0;i<n;i++){
            let sum=0;
            for(let j=i;j<n;j++){
                sum+=arr[j];
                if(sum%2==0){
                    flag=false;
                    break;
                }
            }
            if(!flag){
                break;
            }
        }
        flag?console.log("No"):console.log("Yes");
    }

}
      if (process.env.USERNAME === "THIS-PC") {
        runProgram(`2
        1
        5
        4
        1 2 3 4`);
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