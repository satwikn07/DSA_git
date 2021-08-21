function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var [rows,cols] = input[0].trim().split(" ").map(Number)
    var row_mid = (rows-1)/2
    var col_mid = (cols-1)/2
    var arr = []
    for(let i=1;i<=rows;i++){
        arr.push(input[i].trim().split(" ").map(Number))
    }
    var arr_1=[]
    var arr_2=[]
    // console.log(row_mid,col_mid);
    for(i=0;i<rows;i++){
        if(i<row_mid){
            arr_1.push(arr[i][0])
        }
        else if(i>row_mid){
            arr_1.push(arr[i][cols-1])
        }
        else{
            for(let j=0;j<cols;j++){
                arr_1.push(arr[i][j])
            }
        }
    }
    for(let j=0;j<cols;j++){
        if(j<col_mid){
            arr_2.push(arr[rows-1][j])
        }else if(j>col_mid){
            arr_2.push(arr[0][j])
        }
        else{
            for(let i=rows-1;i>=0;i--){
                arr_2.push(arr[i][j])
            }
        }
    }
    // console.log(arr_1)
    // console.log(arr_2)
    var sum_1 = 0
    var sum_2 = 0
    for(let x of arr_1){
        sum_1 += x
    }
    for(let x of arr_2){
        sum_2 += x
    }
    // console.log(sum_1);
    // console.log(sum_2);
    console.log(Math.abs(sum_1-sum_2));
}
if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    3 5
1 2 3 4 5
6 7 8 9 10
11 12 13 14 15
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