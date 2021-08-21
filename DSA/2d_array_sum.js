function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var meta_data=input[0].split(" ").map(Number)
    var rows = meta_data[0]
    var columns = meta_data[1]
    var summation = meta_data[2]
    var arr = []
    for(let x = 1; x <= rows ; x++){
        arr.push(input[x].split(' ').map(Number))
    }
    function rowcount(){
        var count = 0
        for(var i = 0 ; i < rows ; i++){
            var sum = 0
            for(var j =0 ; j < columns ; j++){
                sum += arr[i][j]
                
            }
            if(sum==summation){
                count+=1
            }
            
        }
        return count
    }
    function colcount(){
        var count = 0
        for(var i = 0 ; i < columns ; i++){
            var sum = 0
            for(var j =0 ; j < rows ; j++){
                sum += arr[j][i]
               
            }
            if(sum==summation){
                count+=1
            }
            
        }
        return count
    }
    function leftdiagonal(){
        var sum =0
        for(var i = 0 ; i < columns ; i++){
            
            for(var j =0 ; j < rows ; j++){
                if(i==j){
                sum += arr[j][i]
                }
            }
            
    }
    if(sum==summation){
        return 1
    }
    else{
        return 0
    }
}
    function rightdiagonal(){
        var sum = 0
        for(var i = 0 ; i < columns ; i++){
            
            for(var j =0 ; j < rows ; j++){
                if((i+j)==(columns-1)){
                sum += arr[i][j]
                }
            } }
            if(sum==summation){
                return 1
            }
            else{
                return 0
            }
     }
     console.log(rowcount()+colcount()+leftdiagonal()+rightdiagonal())

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
