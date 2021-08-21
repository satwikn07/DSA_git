function runProgram(input){
   input=input.trim().split(" ").map(Number)
   var rows = input[0]
   var columns = input[1]
   
   for(var i = 0 ; i < rows ; i++){
       var toggle = 0;
       for(var j = 0 ; j < columns ; j++){
           if(i%2==0){
                arr[i][j]=="#"
                
           }
           else{
                if(!toggle){
                    arr[i][j]="."
                    if(j==columns-1){
                        arr[i][j]="#"
                        toggle=1
                    }
                }
                else{
                    arr[i][j]="."
                    if(j==0){
                        arr[i][j]="#"
                        toggle=0
                    }

                }
           }
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