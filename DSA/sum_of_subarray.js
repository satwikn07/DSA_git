function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var tests = +input[0]
    // console.log(tests);
    
    for(let t=0,line=1;t<tests;t++){
        var [n,k] = input[line++].trim().split(" ").map(Number)
        let arr = input[line++].trim().split(" ").map(Number)
        console.log(n,k);
        console.log(sum_of_subarray(arr,k));
    }
    function sum_of_subarray(array,target){
        let i=0
        let hash_map = {0:1}
        let cum_sum = 0
        while(i<array.length){
            cum_sum += array[i]
            if(hash_map[cum_sum-target]){
                return "Yes"
            }
            else{
                hash_map[cum_sum] = hash_map[cum_sum]?hash_map[cum_sum]+1:1;
            }
            i++;
        }
        
        return 'No'
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