// Time complexit is O(n^2)
function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    const n=+input[0]
    input = input[1].trim().split(" ").map(Number)
    // console.log(input);
    let arr1 = input.map((e)=>e)
    let arr = []
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr1[j]>arr1[j+1]){
                // let temp=arr[j+1]
                let temp1 = arr1[j+1]
                // arr[j+1]=arr[j]
                arr1[j+1]=arr1[j]
                // arr[j]=temp
                arr1[j]=temp1
            }
            
        }
    }
    for(let i=0;i<n;i++){
        arr.push(input.indexOf(arr1[i]))
        
    }
    
    
    let res = ""
    for(let i=0;i<n;i++){
        if(arr[i-1]!=undefined && arr[i]==arr[i-1]){
            res += (arr[i]+1)+" "
        }
        else{
            res += arr[i]+ " "
        }
        
    }
    console.log(res.trim());
}

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    5
    4 5 3 1 3
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