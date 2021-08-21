function runProgram(input) {
    var inp= input.trim().split("\n");
  
    var n = +inp[0].trim();
  
    var stack=[];
    var minStack =[];
    let i=1;
    while(i<=n){
  
      var op = inp[i].trim().split(" ");
  
      if(op[0]=="push"){
        if(stack.length==0){
          minStack.push(op[1]);
          stack.push(op[1]);
        } else{
          const min = Math.min(op[1],minStack[minStack.length-1]);
          minStack.push(min);
          stack.push(op[1]);
        }
  
        } 
        if(stack.length!=0 && op[0]=="pop" ){
          stack.pop();
          minStack.pop();
        }
        if(stack.length!=0 && op[0]=="getMin") {
            console.log(minStack[minStack.length-1]);
        }
        i++;
      }
    }
  
  if (process.env.USERNAME === "THIS-PC") {
  runProgram(`8
  push 5
  push 3
  push 1
  getMin
  pop
  getMin
  pop
  getMin`);
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