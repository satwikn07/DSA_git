//Enter code here
//Enter code here
function runProgram(input) {
    input = input.trim().split("\n")
    var n = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    var leftstack=[0];
    var index =[-1];
    for(var i=1; i<n; i++){
        while( leftstack.length !=0 && arr[leftstack[leftstack.length-1]]<= arr[i]){
            leftstack.pop()
        }
        if(arr[leftstack[leftstack.length-1]]> arr[i]){
             
            index.push((leftstack[leftstack.length-1])+1)
            leftstack.push(i);
        }else if (leftstack.length ==0){
            leftstack.push(i)
            index.push(-1)
        }
    }
    //console.log(index)
    var rightstack=[]
    var rightIndex=[]
    rightstack.push(n-1);
    rightIndex.push(-1)
 
    for(var i=n-2; i>=0; i--){
        while(rightstack.length !=0 && arr[rightstack[rightstack.length-1]]<=arr[i]){
            rightstack.pop()
        }
        if(arr[rightstack[rightstack.length-1]]> arr[i]){
         rightIndex.push((rightstack[rightstack.length-1])+1)
         rightstack.push(i);
           
        }else if(rightstack.length ==0){
            rightstack.push(i)
            rightIndex.push(-1)
        }
    }
   rightIndex.reverse()
   var sum =[]
   for(var i=0; i<n; i++){
      sum.push(index[i]+rightIndex[i]) 
   }
  console.log(sum.join(" "))
 }
   if (process.env.USERNAME === "THIS-PC") {
     runProgram(`5
     5 4 1 3 2 
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