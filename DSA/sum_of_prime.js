function runProgram(input){
    // Write code here
    let num = Number(input)
    // console.log(num);
    // console.log(check_prime(num));
    let count =0
    for(let i=1;i<=num;i++){
        if(check_prime(i)){
            count += i
        }
    }
    console.log(count);

    function check_prime(num){
        if(num==1 || num==0){
            return false
        }
        for(let i=2;i<num;i++){
            if(num%i==0){
                return false
            }
        }
        return true
    }

}         
         

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`13
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