function runProgram(input){
    input=input.trim().split(" ").map(Number)
    var n = input[0]
    var m = input[1]
    var toggle =1 
    for(var i=1;i<=n;i++){
        var str=""
        for(var j=1;j<=m;j++){
            if(i%2==1){
                str+="#"
            }
            else{
                if(toggle){
                    if(j==m){
                        str += "#"
                        toggle = 0
                    }
                    else{
                        str += "."
                    }
                }
                else{
                    if(j==1){
                        str += "#"
                    }
                    else{
                        str += "."
                    }
                    if(j==m){
                        toggle=1
                    }
                }
            }
        }
        console.log(str)
        
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