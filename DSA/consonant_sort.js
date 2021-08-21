function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var tests = +input[0]
    // console.log(tests);
    
    for(let t=0,line=1;t<tests;t++){
        var [n,k] = input[line++].trim().split(" ").map(Number)
        let arr = []
        let counter = []
        let strings = []
        for(let i=0;i<n;i++){
            var str = input[line++].trim()
            // console.log(str);
            
            let count = 0
            for(let x=0;x<k;x++){
                if(!isVowel(str[x])){
                    count++
                }
            }
            // console.log(count);
            if(count%2==1){
                counter.push(count)
                strings.push(str)
            }else{
                arr.push(str)
            }
            

        }
        // console.log(counter,strings);
        for(let i=0;i<counter.length-1;i++){ //sort by iq
            for(let j=0;j<n-i-1;j++){
                if((counter[j]<counter[j+1])){//swap
                    let temp = counter[j]
                    counter[j] = counter[j+1]
                    counter[j+1] = temp
                    temp = strings[j]
                    strings[j] = strings[j+1]
                    strings[j+1] = temp
                   
                }
            }
        }
        // console.log(counter,strings);
        console.log(strings.join("\n"));
        console.log(arr.join('\n'));
    }   
    

}         
function isVowel(char){
    if(char == 'a' || char == "e" || char == "i" || char == "o" || char == "u"){
        return true
    }else{
        return false
    }
}         

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    1
5 4
eaed
fgha
acdf
bbba
cdaa
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