


function runProgram(input){
    str= "i   am   a boy "
    let word = str.split(" ")
    console.log(word);
    word = word.map(el=> el.trim())

    total_word = word.length;
    let space_count = 0
    for(let i=0;i<str.length;i++){
    if(i=" "){
    space_count++;
    }
}
    console.log(word.join(" ".concat(Math.floor(space_count/total_word-1))) + (" ".concat(space_count%total_word-1))) 

}           

if (process.env.USERNAME == "THIS-PC"){
    runProgram(``);
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