function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var tests = +input[0]
    // console.log(tests);
    
    for(let t=0,line=1;t<tests;t++){
        var n = +input[line++]
        let arr = input[line++].trim().split(" ").map(Number)
        // console.log(n,arr);
        let freqMap = {};
        let startMap = {};
        let order = 0;
        let s = 0;
        let e = 0;
        let len = s - e + 1;
        for(let i=0;i<arr.length;i++){
            if(freqMap[arr[i]]){
                freqMap[arr[i]] = freqMap[arr[i]] + 1;
            }else{
                freqMap[arr[i]] = 1;
                startMap[arr[i]] = i;            
            }
            if(freqMap[arr[i]]>order){
                order = freqMap[arr[i]];
                s = startMap[arr[i]];
                e = i;
                len = e - s + 1;
            }else if(freqMap[arr[i]]==order){
                let length = i - startMap[arr[i]] + 1;
                if(length<len){
                    hreq = freqMap[arr[i]];
                    s = startMap[arr[i]];
                    e = i;
                    len = e - s + 1;
                }
            }
        }
        console.log(len);
    }

}         
         

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    1
    13
    1 3 3 2 2 3 6 6 5 5 6 6 3
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