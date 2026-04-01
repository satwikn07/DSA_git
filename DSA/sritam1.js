function myFunction(input){
    input=input.trim().split(/[\r\n]+/)
    let  N = Number(input[0])
    let  str = input[1].trim()
    let ans = '';
    for(let i=0;i<N;i++){
        if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
            null;
        }else{
            ans += str[i]
        }
    }
    console.log(ans); 
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
    myFunction(read);
    process.exit(0);
});