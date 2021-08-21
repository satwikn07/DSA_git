function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    const [n,k] = input[0].trim().split(" ").map(Number)
    const word = input[1].trim()
    // console.log(n,k,word);
    let i=0
    let count = 0
    while(i+k<n){
        let sub = word.substring(i,i+k)
        if(!checkrep(sub)){
            count++
        }
        i++
    }
    console.log(count);
    function checkrep(word){
        for(let i=0;i<word.length;i++){
            for(let j=word.length-1;j>i;j--){
                if(word[i]===word[j]){
                    return true
                }
            }
        }
        return false
    }
}         
         

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    4 2
abcc
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