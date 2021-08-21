function runProgram(input) {
    // Write code here
    var inp = input.split("\n");
    var test = +inp[0].trim();
//    console.log(test);
    var line=1;
    for(var i=0;i<test;i++){
        var n = +inp[line++].trim();
        var arr=inp[line++].trim().split(" ").map(Number);
        //code here
        var array=[];
        for(var k=0;k<n-1;k++){
//            console.log(k);
            for(var l=k+1;l<n;l++){
              //  console.log(k,l);
                array.push(arr[k]*arr[l]);
            }
        }
        // console.log(Math.max(...array));
        console.log(maxNo(array));
//        console.log(max);
        function maxNo(array){
            var max = array[0]
            for(var a=0;a<array.length;a++){
                if(array[a]>max){
                    max=array[a]
                }
            }
            return max;
        }
//        console.log(max);
    }
  }
  if (process.env.USERNAME === "THIS-PC") {
    runProgram(`3
    6 
    1 0 7 2 4 0
    5
    1 2 3 4 5
    2
    0 0`);
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