function runProgram(input){
    input = input.trim().split('\n')
    let test = +input[0];
    for(let t=0,line=1;t<test;t++){
         let n = +input[line++];
         let arr = input[line++].trim().split(" ").map(Number)
        //  console.log(n,arr);
        let max = arr[0];
        let flag = 0
        for(let i=0;i<n;i++){
            if(max<=arr[i] && arr.includes(-arr[i])){
                max = Math.abs(arr[i])
                flag = 1;
            }
        }

        flag?console.log(max):console.log(-1);
    }
 }
 
 
 if (process.env.USERNAME == "satwi"){
     runProgram(`
     2
 5
 2 1 -1 -2 3
 5
 -3 2 -4 4 -2
 `);
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
 });
 }