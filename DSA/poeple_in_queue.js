function runProgram(input) {
    input = input.trim().split("\n")
    var[N,T]= input[0].trim().split(" ").map(Number)
    var queue=[]
    for(let m=0,line=1; m<T; m++){
        var arr =input[line++].trim().split(" ").map(Number);
        
        // console.log(arr);
        if(arr[0]==1){
            //enquque
            if(queue.length==N){
                console.log(-1);
            }else{
                queue.push(arr[1])
                console.log(arr[1]);
            }

        }else{
            //dequeue
            if(queue.length==0){
                console.log(-1);
            }
            else{
                console.log(queue.shift());  
            }

        }
    }
 }
   if (process.env.USERNAME === "THIS-PC") {
     runProgram(`2 6
     1 1
     1 2
     1 3
     2
     2
     2
     `);
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