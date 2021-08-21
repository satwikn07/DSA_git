function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var tests = +input[0]
    // console.log(tests);
    dict = {'A':1,'B':2,'C':3,'D':4,'E':5,'F':6,'G':7,'H':8,'I':9,'J':10,'K':11,'L':12,'M':13,'N':14,'0':15,'P':16,'Q':17,'R':18,'S':19,'T':20,'U':21,'V':22,'W':23,'X':24,'Y':25,'Z':26}
    for(let t=0,line=1;t<tests;t++){
        let inp = input[line++]
        // console.log(arr);
        // console.log(inp);
        console.log(ex_number(inp))
    }
                 
}  
function ex_number(str){
    let n = str.length;
    if (n==1){
        return dict[str]
    }else{
        return dict[str[0]]*(26**(n-1)) + ex_number(str.substring(1,n))
    }
}       

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    3
A
AB
ZY
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