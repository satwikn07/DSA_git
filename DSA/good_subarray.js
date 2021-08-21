function runProgram(input) {
    var input = input.trim().split("\n");
    var n = +input[0].trim();
    var arr = input[1].trim().split(" ").map(Number);
    var subarr = []
    var count =0;


    for(let i=0;i<n;i++){
     for(j=i+1;j<n+1;j++){
         subarr.push(arr.slice(i,j));
     }   
    }

    for(let i=0;i<subarr.length;i++){
       goodsubarr(subarr[i]) && count++;
    }
    console.log(count);
}
function goodsubarr(arr){
    if(arr.length==1){
        return true
    }
    
    for(let i=0;i<arr.length;i++){
        if(arr[0]<=arr[i]){
            continue
        }else{
            return false
        }
    }
    return true
}
      if (process.env.USERNAME === "THIS-PC") {
        runProgram(`3
        2 2 2
        `);
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