function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var tests = +input[0]
    // console.log(tests);
    
    for(let i=0,line=1;i<tests;i++){
        var n = +input[line++]
        let arr = input[line++].trim().split(" ").map(Number)
        let prod = 1
        for(let j=0;j<n;j++){
            let check_required = false
            for(var k=j+1;k<n;k++){
                if(arr[j]<arr[k]){
                    check_required = true
                    break
                }
            }
            if(check_required){
                let check = true
                for(let x=k+1;x<n;x++){
                    if(arr[x]<arr[k]){
                        prod *= arr[x]
                        check = false
                        break
                    }
                }
                if(check){
                    prod *= (-1)
                }
            }
            else{
                prod *= (-1)
            }

        }
        console.log(prod);
    }

}         
         

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    1
    6
    5 1 6 2 5 1
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