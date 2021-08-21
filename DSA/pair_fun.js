function runProgram(input) {
    var inp = input.trim().split("\n");
    var test = +inp[0]
    // console.log(test);
    for(let t=0,line=1;t<test;t++){
        let n = +inp[line++];
        let arr = inp[line++].trim().split(" ").map(Number);
        let count = 0;
        arr.sort();
        let i=0;
        let j=1;
        while(i<j){
            if(5*arr[i]<4*arr[j]){
                j++
            }else if(5*arr[i]>4*arr[j]){
                i++
            }else{
                count++
            }
        }
        console.log(count);
    }
}
   if (process.env.USERNAME === "THIS-PC") {
     runProgram(`2
     6
     5 5 5 4 4 4
     3
     0 0 0`)
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
        })
        }