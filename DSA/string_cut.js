function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    let word = input[0].trim().split("")
    
    let str1 =[];
    let str2 =[];
    let str3 ="";
    
    if(word.length%2==0){
        str1 = word.slice(0,word.length/2)
        str2 = word.slice(word.length/2,word.length)
        str3 = ""
    }else{
        str1 = word.slice(0,word.length/2);
        str2 = word.slice(word.length/2+1,word.length)
        str3 = word[Math.floor(word.length/2)]
    }
    // for(let i=0;i<str1.length;i++){
    //     stack_1.push(str1[i])
    // }
    // for(let i=0;i<str2.length;i++){
    //     stack_2.push(str2[i])
    // }
    let ans = str1.reverse().join("") + str3 + str2.reverse().join("")
    console.log(ans);
}

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    abcxyz
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