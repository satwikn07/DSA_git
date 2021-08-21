function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var [row,col] = input[0].trim().split(" ").map(Number)
    
    var arr=[]
    for(let i=1;i<=row;i++){
        arr.push(input[i].trim().split(" "))
    }
    let target = input[row+1].trim()
    let sum,sub;
    let left_dia=""
    let right_dia=""
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            if(arr[i][j]==target){
                sum=i+j;
                sub=(i-j)
            }
        }
    }
   
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            if(i+j==sum){
                right_dia+=arr[i][j]+" "
            }
            if((i-j)==sub){
                left_dia+=arr[i][j]+" "
            }
        }
    }
    console.log(left_dia.trim());
    console.log(right_dia.trim());
    
    
}         
         

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    3 3
1 2 3
4 5 6
7 8 9
6
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