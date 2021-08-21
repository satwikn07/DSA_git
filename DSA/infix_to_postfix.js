function runProgram(input) {
    input = input.trim();
    const postFix = [];
    const stack = [];
  
    for (let i = 0; i < input.length; i++) {
      if (precedency(input[i]) == 0 && input[i] != ")" && input[i] != "(") {
        postFix.push(input[i]);
      } else if (input[i] == "(") {
        stack.push(input[i]);
      } else if (input[i] == ")") {
        let j = stack.length - 1;
        while (j >= 0) {
          if (stack[j] != "(") postFix.push(stack.pop());
          else {
            stack.pop();
            break;
          }
          j--;
        }
      } else {
        if (stack.length == 0) {
          stack.push(input[i]);
        } else {
          if (precedency(stack[stack.length - 1]) < precedency(input[i])) {
            stack.push(input[i]);
          } else {
            while (
              stack.length > 0 &&
              precedency(stack[stack.length - 1]) >= precedency(input[i])
            ) {
              postFix.push(stack.pop());
            }
            stack.push(input[i]);
          }
        }
      }


      function precedency(char){
        if(char==="^"){
          return 3
        }else if(char==="*" || char==="/"){
          return 2
        } else if(char==="+" || char==="-"){
          return 1
        } else{
          return 0
        }
      }
    }
    postFix.push(stack.pop());
    console.log(postFix.join(""));
}

if (process.env.USERNAME === "sachi") {
    runProgram(`a+b-c+d*(e-f)/g+(h*(i/j))`)
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