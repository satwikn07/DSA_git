function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var n = Number(input[0])
    input = input[1].split(" ").map(Number)
    var smallest;
    var ans;
    
    for(let i=0;i<n;i++){
        
        var sum_rem_ele = 0;
        for(let j=0;j<n;j++){
            if(i!=j){
                sum_rem_ele += input[j]
            }
        }
        if(sum_rem_ele%7==0){
            if(smallest==undefined){
                smallest=input[i]
                ans=i
            }
            if(input[i]<smallest){
                smallest=input[i]
                ans=i
            }
           
        
        }   
    }
    if(smallest==undefined){
        console.log(-1)
    }
    else{
    console.log(input.indexOf(smallest))
    }
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
    runProgram(read);
    process.exit(0);
});
