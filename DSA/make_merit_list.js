function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    // console.log(input);
    let name =[]
    let height = []
    let weight = []
    let iq = []
    const n = +input[0]
    for(let i=1;i<=n;i++){
        name.push(input[i].split(" ")[0])
        height.push(input[i].split(" ")[1])
        weight.push(input[i].split(" ")[2])
        iq.push(input[i].split(" ")[3])
    }
    console.log(name,height,weight,iq);
    for(let i=0;i<iq.length-1;i++){ //sort by iq
        for(let j=0;j<n-i-1;j++){
            if(iq[j]<iq[j+1]){//swap
                let temp = name[j]
                name[j] = name[j+1]
                name[j+1] = temp
                temp = height[j]
                weight[j] = weight[j+1]
                weight[j+1] = temp
                temp = weight[j]
                height[j] = height[j+1]
                height[j+1] = temp
                temp = iq[j]
                iq[j] = iq[j+1]
                iq[j+1] = temp
            }
        }
    }
    for(let i=0;i<height.length-1;i++){ //sort by height
        for(let j=0;j<n-i-1;j++){
            if(height[j]<height[j+1] && iq[j]==iq[j+1]){//swap
                let temp = name[j]
                name[j] = name[j+1]
                name[j+1] = temp
                temp = height[j]
                weight[j] = weight[j+1]
                weight[j+1] = temp
                temp = weight[j]
                height[j] = height[j+1]
                height[j+1] = temp
                temp = iq[j]
                iq[j] = iq[j+1]
                iq[j+1] = temp
            }
        }
    }
    for(let i=0;i<weight.length-1;i++){ //sort by weight
        for(let j=0;j<n-i-1;j++){
            if(weight[j]>weight[j+1] && height[j]==height[j+1]){//swap
                let temp = name[j]
                name[j] = name[j+1]
                name[j+1] = temp
                temp = weight[j]
                weight[j] = weight[j+1]
                weight[j+1] = temp
                temp = height[j]
                height[j] = height[j+1]
                height[j+1] = temp
                temp = iq[j]
                iq[j] = iq[j+1]
                iq[j+1] = temp
            }
        }
    }
    for(let i=0;i<name.length-1;i++){ //lexicographic
        for(let j=0;j<n-i-1;j++){
            const res = str_cmp(name[j],name[j+1])
            if(res>0 && weight[j]==weight[j+1]){ //swap
                let temp = name[j]
                name[j] = name[j+1]
                name[j+1] = temp
                temp = weight[j]
                weight[j] = weight[j+1]
                weight[j+1] = temp
                temp = height[j]
                height[j] = height[j+1]
                height[j+1] = temp
                temp = iq[j]
                iq[j] = iq[j+1]
                iq[j+1] = temp
            }
        }
    }
   
    
    
    
    
    
    
    
    
    console.log(name);
    // let rank = 1;
    // let count =0;
    // let prev_marks = -1;
    // for(let i=0 ;i<score.length;i++){
    //     if(score[i]==prev_marks){
    //         console.log(rank,name[i]);
    //     }
    //     else{
    //         rank += count;
    //         count =0;
    //         console.log(rank,name[i]);
    //     }
    //     count++;
    //     prev_marks = score[i]
    // }
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
    10
jack 158 85 112
john 168 74 124
arti 148 65 120
bhuvan 182 84 124
navi 182 84 124
vijay 175 88 115
amit 180 89 119
kevin 182 77 120
rohit 174 85 100
vivek 184 75 111

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