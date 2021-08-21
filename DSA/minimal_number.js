function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var tests = +input[0]
    // console.log(tests);
    
    for(let t=0,line=1;t<tests;t++){
        let n = +input[line++]
        let arr = input[line++].trim().split(" ").map(Number); 
        arr.sort()
        let x = 1; 
        // console.log(arr);
        while(arr[0]==0){
            if(arr[x]!=0){
                let temp = arr[x];
                arr[x] = arr[0];
                arr[0] = temp;
                break; 
            }else{
                x++;
            }
        }        
        console.log(arr.join(""));
    }
    
      

}         
         

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    3
4
2 1 0 0
4
1 4 2 3
4
5 2 3 2
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