// function runProgram(input){
//     // Write code here
//     input=input.trim().split(/[\r\n]+/)
//     let len = Number(input[0])
//     let word = input[1]
//     let alp = "abcdefghijklmnopqrstuvwxyz";
//     // let [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
//     let arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
//     for(let i=0;i<len;i++){
//         // console.log(alp.indexOf(word[i]));
//         let ind = alp.indexOf(word[i])
//         arr[ind] = arr[ind]+1
//     }
//     // console.log(arr);
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>0){
//             console.log(`${alp[i]}-${arr[i]}`);
//         }
//     }
// }         
function isValid(s) {
    // Write your code here
    let myObj = {}
    for(let i=0;i<s.length-1;i++){
        if(myObj[s[i]]){
            myObj[s[i]] = myObj[s[i]] + 1;
        }else{
            myObj[s[i]] = 1;
        }
    }
    return myObj

}         

if (process.env.USERNAME == "THIS-PC"){
    isValid(`aabbcc`);
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