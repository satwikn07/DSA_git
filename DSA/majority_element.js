function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var tests = +input[0]
    // console.log(tests);
    
    for(let t=0,line=1;t<tests;t++){
        var n = +input[line++]
        let arr = input[line++].trim().split(" ").map(Number)
        //we will find candidate element
        let maj = arr[0];
        let count = 1;
        for(let i=1;i<n;i++){
            if(maj==arr[i]){
                count++;
            }else{
                count--;
            } 
            if(count==0){
                maj = arr[i]    
                count = 1;
            }
        }
        let c = 0;
        for(let i=0;i<n;i++){
            if(maj==arr[i]){
                c++
            }
        }
        if(c>Math.floor(n/2)){
            console.log(maj);
        }else{
            console.log(-1);
        }
    }
   

}         
         

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    2
    6
    1 1 1 1 2 3
    6
    1 1 1 2 2 3
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