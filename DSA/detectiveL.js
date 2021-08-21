function runProgram(input) {
    let inp = input.trim().split("\n");
    let test = +inp[0].trim();
    for (let t = 0,line=1; t <test ; t++) {
        let mat =[];
        let [row,col] = inp[line++].trim().split(" ").map(Number);
        for (let i = 0; i < row; i++) {
                mat.push(inp[line++].trim().split(" ").map(Number));
        }
        let top=0,bottom=row-1,right=col-1,left=0;
        let ans=[];
        while(left<=right && top<=bottom){
            for (let i = top; i <= bottom; i++) {
                ans.push(mat[i][left])                
            }
            left++;
            for (let i = left; i <= right; i++) {
                ans.push(mat[bottom][i])                
            }
            bottom--;
        }
        console.log(ans.join(" "));

    }

}
  if (process.env.USERNAME === "sachi") {
    runProgram(`2
    3 3
    1 2 3
    4 5 6
    7 8 9
    4 3
    1 2 3
    4 5 6
    7 8 9
    10 11 12`);
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