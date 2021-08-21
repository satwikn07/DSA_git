function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var tests = +input[0]
    // console.log(tests);
    
    for(let t=0,line=1;t<tests;t++){
        var [n,k] = input[line++].trim().split(" ").map(Number)
        let arr = input[line++].trim().split(" ").map(Number)
        let ans = -1
        let highest = high(arr)
        // console.log(highest);
        let arr1 = arr.filter(el=>el+highest>=k)
        // console.log(arr1); 
        for(let x=0;x<arr1.length;x++){
            for(let y=arr1.length-1;y>x;y--){
                if((arr1[x]+arr1[y])==k){
                     ans = 1
                     break
                }
            }
            if(ans==1){
                break
            }
        }
    
        // var mat =[]
        // for(let j=0;j<rows;j++){
        //     mat.push(input[line++].trim().split(' ').map(Number))

        // }
    console.log(ans);     
    }

    function high(arr){
        let high = arr [0]
        for(let i=0;i<arr.length;i++){
            if(high<arr[i]){
                high = arr [i]
            }
        }
        return high
    }

}         
         

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
2
5 2
3 4 0 2 7
5 1
2 0 2 0 2
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