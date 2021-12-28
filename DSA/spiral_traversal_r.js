//Enter code here
function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var tests = +input[0]
    // console.log(tests);
    for(let t=0,line=1;t<tests;t++){
        let [r,c] = input[line++].trim().split(" ").map(Number);
        let arr = [];
        for(let i=0;i<r;i++){
            arr.push(input[line++].trim().split(" ").map(Number))
        }
        // console.log(arr);
        let top = 0;
        let bottom = r - 1;
        let left = 0;
        let right = c - 1;
        let count = 1;
        let ans = [];
        while(count<=r*c){
		
        for(let i=top,j=left;i<=bottom && count<=r*c;i++){
            ans.push(arr[i][j])
            count++
        }
        left++;
          
        for(let i=bottom,j=left;j<=right && count<=r*c;j++){
            ans.push(arr[i][j])
            count++
        }
        bottom--;
        
        for(let i=bottom,j=right;i>=top && count<=r*c;i--){
            ans.push(arr[i][j])
            count++
        }
        right--;
        

        for(let i=top,j=right;j>=left && count<=r*c;j--){
            ans.push(arr[i][j])
            count++
        }
        top++;
        
        }
        console.log(ans.join(" "));
    }
}         
         

if (process.env.USERNAME == "satwi"){
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