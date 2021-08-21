// let arr = [3 ,2 ,1]


// console.log(shift(shift(arr)));
function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var n = +input[0]
    var given=input[1].split(" ").map(Number)
    var actual = input[2].split(" ").map(Number)
    // console.log(n,given,actual);
    let ops = 0
    while(given.length!=0){
        while(first(given)!=first(actual)){
            given = shifts(given)
            // console.log(given);
            // console.log(actual);
            ops++
        }
        if(first(given)==first(actual)){
            given.shift()
            actual.shift()
            // console.log(given);
            // console.log(actual);
            ops++
        }
        
    }
    console.log(ops);

    
}
function first(arr){
    return arr[0]
}
function shifts(arr){
    let n = arr.length
    let temp = arr[0]
    for(let i=1;i<n;i++){
        arr[i-1] = arr[i]
    }
    arr[n-1] = temp
    return arr
}

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    3
3 2 1
1 3 2
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