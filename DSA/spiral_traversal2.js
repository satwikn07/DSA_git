function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var tests = +input[0]
    // console.log(tests);
    
    for(let t=0,line=1;t<tests;t++){
        var n = +input[line++].trim()
        let arr =[]
        for(let a=0;a<n;a++){
            arr.push(input[line++].trim().split(" ").map(Number))
        }
        let top = 0
        let bottom = (n - 1)
        let left = 0
        let right = (n -1)
        let ans = ""
        count = 1
       while(count<=n*n){
           for(let i = top,j=right;i<=bottom && count<=(n*n);i++){
               ans += arr[i][j]+ " ";
               count ++;
           }
           right--;
           for(let i = bottom,j=right;j>=left && count<=(n*n);j--){

            ans += (arr[i][j])+ " ";
             count ++;
           }
           bottom --;
           for(let i = bottom,j=left;i>=top && count<=(n*n);i--){

            ans += (arr[i][j])+ " ";
            count++;
           }
           left ++;
           for(let i = top,j=left;j<=right && count<=(n*n);j++){

            ans += (arr[i][j])+" ";
            count ++;
           }
           top++;

       }
       console.log(ans.trim());
    }

    

}         
         

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    1
3
1 2 3
4 5 6
7 8 9
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