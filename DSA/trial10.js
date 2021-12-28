// let str = "ab"
// console.log(str.charCodeAt(1)-96);


// console.log(''.localeCompare('bca'));
// console.log('abcde'.substring(1));
// console.log(null==undefined);
// function ChangingSequence(arr){
//     let truth = arr[0] < arr[1];
//     for(let i=0;i<arr.length-1;i++){
//         if((arr[i]<arr[i+1])==truth){
//             continue
//         }
//         else{
//             return i
//         }
//     }
//     return -1
// }
// console.log(ChangingSequence([-4,-2,9,10]));
// console.log(['1','2','15','-7','300'].sort());

// const promises = [3,2,1].map(d=>(
//     new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve(d)
//         },d*1000)
//     })
// ))
// Promise.race(promises).then((val)=>{
//     console.log(val);
// })
// const f = n => n <=1?1:n*f(n-1);
// console.log(f(4));
function func(a,b){
    a+=1;
    b.push(1)
}
const a = 0;
const b = [];
func(a,b);
console.log(a,b);