function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var n = Number(input[0])
    input = input[1].split(" ").map(Number)
    var total = 0 ;
    for(let i = 0 ; i < n ; i++){
        for(let j=i+1;j<n;j++){
            if(isPrime(j-i)){
                
                total+=absDiff(input[j],input[i])
            }
        }
    }
    console.log(total)
    function absDiff(a,b){
        if(a-b>=0){
            return (a-b)
        }
        else{
            return -(a-b)
        }
    }
   
    function isPrime(num){
        if(num==1){
            return false
        }
        if(num==2){
            return true
        }
        for(let i=2; i<num; i++){
            if(num%i==0){
                return false
            }
        }
        return true
    }
   
}

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
