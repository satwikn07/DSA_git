function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var tests = +input[0]
    // console.log(tests);
    
    for(let i=0,line=1;i<tests;i++){
        var [n,m] = input[line++].trim().split(" ").map(Number)
        let ans = ""
        for(let j=0;j<n;j++){
            var arr = input[line++].trim().split(" ").map(Number)
            ans += high(arr) + " "
        }
        console.log(ans.trim());    
        
    
        // var mat =[]
        // for(let j=0;j<rows;j++){
        //     mat.push(input[line++].trim().split(' ').map(Number))

        // }
    // console.log(ans);     
    }

    function high(arr){
        let high = arr [0]
        for(let i=0;i<arr.length;i++){
            if(high<arr[i]){
                high = arr [i]
            }
        }
        return high
    }

}         
         

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    2
    3 4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    3 3
    7 7 1
    4 3 10
    1 2 3
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