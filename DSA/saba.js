function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var first_line=input[0].split(" ").map(Number)
    var rows = first_line[0]
    var columns = first_line[1]
    var arr=[]
    var count = 0
    for(let i=1;i<=rows;i++){
        arr.push(input[i].trim().split(""))
    }
    console.log(arr)
    for(i=0;i<rows;i++){
        for(j=0;j<columns;j++){
            if(arr[i][j]=="s"){
                if(i<=rows-4){
                    if(arr[i+1][j]=="a" && arr[i+2][j]=="b" && arr[i+3][j]=="a"){
                        count++
                    }
                }
                if(j<=columns-4){
                    if(arr[i][j+1]=="a" && arr[i][j+2]=="b" && arr[i][j+3]=="a"){
                        count++
                    }
                }
                if(i>=3 && j<=columns-4){
                    if(arr[i-1][j+1]=="a" && arr[i-2][j+2]=="b" && arr[i-3][j+3]=="a"){
                        count++
                    }
                }
                if(i<=rows-4 && j<=columns-4){
                    if(arr[i+1][j+1]=="a" && arr[i+2][j+2]=="b" && arr[i+3][j+3]=="a"){
                        count++
                    }
                }



            }
        }
    }
    console.log(count)
    
}
if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    5 5
    safer
    amjad
    babol
    aaron
    songs  	
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