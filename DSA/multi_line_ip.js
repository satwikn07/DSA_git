function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var first=input[0].split(" ").map(Number)
    var second=input[1].split(" ").map(Number)
    var first_marks = 0
    var second_marks = 0
    for(var i=0;i<first.length;i++){
        first_marks+=first[i]
        second_marks+=second[i]
    }
    console.log(first_marks,second_marks)
    if(first_marks>second_marks){
        console.log("First")
    }
    else if(second_marks>first_marks){
        console.log("Second")
    }
    else {
        if(first[2]>second[2]){
            console.log("First")
        }
        else if(first[2]<second[2]){
            console.log("Second")
        }
        else{
            if(first[0]>second[0]){
                console.log("First")
            }
            else{
                console.log("Second")
            }
        }
    }
}

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    3
    5 3
    1 2 1 3 4
    4 9
    1 2 1 3
    3 2
    1 2 1
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