function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0].trim();
    for(let m=0, line=1; m<test;m++){
      var N = +input[line++].trim()
      var arr = input[line++].trim().split(" ").map(Number)
 //console.log(N, arr)
     var i=0;
     var  j =0;
      var global_count =0
      var Obj ={}
      var local_count =0
      while(i<=j && j<N){
          
          if(Obj[arr[j]] ==undefined){
              local_count = j-i+1
              Obj[arr[j]]=1
              
            //   console.log("lc",local_count);
          }else {
              while(arr[i]!=arr[j]){
               i++  
              
              }
              i++
              local_count= j-i+1
            //   console.log(local_count);

          }
          j++
          global_count = Math.max(local_count, global_count)
      }
      
   console.log(global_count)
    }
 }
   if (process.env.USERNAME === "THIS-PC") {
     runProgram(`3
     8
     1 2 1 3 2 7 4 2
     5
     1 2 1 3 4
     4
     1 2 2 1 
 
     `)
   }else{

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
    }