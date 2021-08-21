function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var tests = +input[0]
    // console.log(tests);
    
    for(let t=0,line=1;t<tests;t++){
        var n = +input[line++]
        // console.log(n);
        let even = 0;
        let odd = 0;
        for(let i=1;i<=n;i++){
            if(i%2==0 && n%i==0){
                even++
            }else if(i%2==1 && n%i==0){
                odd++
            }else{
                continue
            }
        }
        if(even > odd){
            console.log('Even Skewed');
        }else if(odd>even){
            console.log('Odd Skewed');
        }else{
            console.log('Not Skewed');
        }
    }
    
      

}         
         

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    3
    4
    6
    11
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