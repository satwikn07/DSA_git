function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var first_line=input[0].split(" ").map(Number)
    var n = first_line[0]
    var m = first_line[1]
    var p = first_line[2]
    var arr=[]
    var count = 0
    for(let i=1;i<=n;i++){
        arr.push(input[i].trim().split(" ").map(Number))
    }
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(i+2<n){
                let pro = arr[i][j] * arr[i+1][j] * arr[i+2][j]
                if(pro==p){
                    count++
                }
            }
            if(j+2<m){
                let pro = arr[i][j] * arr[i][j+1] * arr[i][j+2]
                if(pro==p){
                    count++
                }
            }
            if(i-2>=0 && j+2<m){
                let pro = arr[i][j] * arr[i-1][j+1] * arr[i-2][j+2]
                if(pro==p){
                    count++
                }
            }
            if(i+2<n && j+2<m){
                let pro = arr[i][j] * arr[i+1][j+1] * arr[i+2][j+2]
                if(pro==p){
                    count++
                }
            }

            }
        }
        console.log(count)
    }

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    3 3 6
    3 2 1
    2 2 2
    1 5 1
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