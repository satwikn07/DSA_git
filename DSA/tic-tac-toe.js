function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    arr=[]
    for(let i=0;i<3;i++){
        arr.push(input[i].trim().split(" "))
    }

    for(let i=0;i<3;i++){
        if(arr[i][0]=="x"){
            if(arr[i][1]=="x" && arr[i][2]=="x"){
                console.log("x")
                break
            }
        }
        if(arr[i][0]=="o"){
            if(arr[i][1]=="o" && arr[i][2]=="o"){
                console.log("o")
                break
            }
        }
    }
    for(let i=0;i<3;i++){
        if(arr[0][i]=="x"){
            if(arr[1][i]=="x" && arr[2][i]=="x"){
                console.log("x")
                break
            }
        }
        if(arr[0][i]=="o"){
            if(arr[1][i]=="o" && arr[2][i]=="o"){
                console.log("o")
                break
            }
        }
    }
    if(arr[0][0]=="x" && arr[1][1]=="x" && arr[2][2]=="x"){
        console.log("x")
    }
    if(arr[0][0]=="o" && arr[1][1]=="o" && arr[2][2]=="o"){
        console.log("o")
    }
    if(arr[2][0]=="x" && arr[1][1]=="x" && arr[0][2]=="x"){
        console.log("x")
    }
    if(arr[2][0]=="o" && arr[1][1]=="o" && arr[0][2]=="o"){
        console.log("o")
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
