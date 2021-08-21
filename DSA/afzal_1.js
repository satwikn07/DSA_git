function runProgram(input) {
    // Write code here
    var [n,m] = input.trim().split(" ").map(Number);
    var mat =[];
    var c =0;
    for(let i=0;i<n;i++){
        var st="";
        for(let j=0;j<m;j++){
            if(i%2==0){
                st+="#";
            }else{
              c++;
              if(c%2!=0){
                while(j<m-1 && j>=0){
                  st+=".";
                  j++
                }
                st+="#"; 
              }else{
                st+="#";
                j++;
                while(j>0 && j<m){
                  st+=".";
                  j++;
                }
              }
            }
        }
        mat+=st+"\n";
    }
    console.log(mat);
}
  if (process.env.USERNAME === "Afzal") {
    runProgram(`5 3`);
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