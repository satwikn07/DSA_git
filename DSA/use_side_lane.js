function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    let inp = []
    for(let i=0;i<input.length;i++){
        inp.push(input[i].trim())
    }
    let i=0;
    while(inp[i]!="0"){
        let N = +inp[i++];
        let road = inp[i++].split(" ").map(Number);
        let ticket = 1;
        let garage = [];
        while(road.length!=0){

            if(ticket==road[0]){
                road.shift()
                ticket++;
            }else if(ticket==garage[garage.length-1]){
                garage.pop()
                ticket++;
            }else{
                garage.push(road.shift())
            }
        }
        while(garage.length!=0 && garage[garage.length-1]==ticket){
            garage.pop();
            ticket++;
        }
        if(garage.length==0 & road.length ==0){
            console.log('yes');
        }else{
            console.log('no');
        }
    }
}         
    


if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    5
5 1 2 4 3 
    5 
4 1 5 3 2 
    0
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