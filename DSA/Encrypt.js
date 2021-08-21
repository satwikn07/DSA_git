function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    let word = input[0]
    let num = +input[1]
    console.log(word,num);
    let ans = ""
    let charMatch = (char) =>{
        var letterNumber = /^[0-9a-zA-Z]+$/;
        if(char.match(letterNumber)){
            return true
        }else{
            return false
        }
    }
    function isNumeric(num){
        return !isNaN(num)
    }
    for(let i=0;i<word.length;i++){
        if(charMatch(word[i])){
            if(isNumeric(word[i])){
                let no = +word[i]
                no = (no+num)%10
                ans = ans + no.toString()
            }else{
                let alpha = word[i];
                let tar = alpha.charCodeAt(0);
                ans = ans + String.fromCharCode(tar+num)
            }
        }else{
            ans = ans + word[i]
        }
    }
    console.log(ans);
}
// console.log(String.fromCharCode(65));
//  console.log(String.charCodeAt('A'))
// str = "A";
// console.log(str.charCodeAt(0));
//console.log('AB'.match(letterNumber));
if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    All-convoYs-9-be:Alert1.
4
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