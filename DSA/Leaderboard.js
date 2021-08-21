function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    // console.log(input);
    let name =[]
    let score = []
    const n = +input[0]
    for(let i=1;i<=n;i++){
        name.push(input[i].split(" ")[0])
        score.push(input[i].split(" ")[1])
    }
    // console.log(name,score);
    for(let i=0;i<name.length-1;i++){
        for(let j=0;j<n-i-1;j++){
            const res = str_cmp(name[j],name[j+1])
            if(res>0){ //swap
                let temp = name[j]
                name[j] = name[j+1]
                name[j+1] = temp
                let temp1 = score[j]
                score [j] = score[j+1]
                score[j+1] = temp1
            }
        }
    }
    for(let i=0;i<score.length-1;i++){
        for(let j=0;j<n-i-1;j++){
            if(score[j]<score[j+1]){//swap
                let temp = name[j]
                name[j] = name[j+1]
                name[j+1] = temp
                let temp1 = score[j]
                score [j] = score[j+1]
                score[j+1] = temp1
            }
        }
    }
    let rank = 1;
    let count =0;
    let prev_marks = -1;
    for(let i=0 ;i<score.length;i++){
        if(score[i]==prev_marks){
            console.log(rank,name[i]);
        }
        else{
            rank += count;
            count =0;
            console.log(rank,name[i]);
        }
        count++;
        prev_marks = score[i]
    }
    // console.log(name,score);


}
function str_cmp(a,b){
    for(let i=0;i<Math.min(a.length,b.length);i++){
        if(a[i]!=b[i]){
            return a.charCodeAt(i) - b.charCodeAt(i)
        }
    }
}

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    6
rancho 45
chatur 32
raju 30
farhan 28
virus 32
joy 45
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