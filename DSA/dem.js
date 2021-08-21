function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var tests = +input[0]
    // console.log(tests);
    
    for(let t=0,line=1;t<tests;t++){
        var [n,m] = input[line++].trim().split(" ").map(Number)
        let arr =[]
        for(let a=0;a<n;a++){
            arr.push(input[line++].trim().split(" ").map(Number))
        }
        let top = 0
        let bottom = n-1 // n is no of rows
        let left = 0
        let right = m -1 //m is no of cols
        let ans = ""
        let count = 0
        while(count<(n*m)){
        for(let i=top,j=left;i<=bottom && count<(n*m);i++){
            ans += arr[i][j] + " "
            count++
        }
        left ++;
        for(let i=bottom,j=left;j<=right && count<(n*m);j++){
            ans += arr[i][j] + " "
            count++
        }
        bottom--;
        for(let i=bottom,j=right;i>=top && count<(n*m);i--){
            ans += arr[i][j] + " "
            count++
        }
        right --;

        for(let i=top,j=right;j>=left && count<(n*m);j--){
            ans += arr[i][j] + " "
            count++
        }
        top ++;
    }
    console.log(ans.trim());
    }
}         
         

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    2
3 4
1 2 3 4
5 6 7 8
9 10 11 12
4 3
1 2 3
4 5 6
7 8 9
10 11 12
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