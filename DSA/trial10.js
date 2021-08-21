a= '3aabacbebebe';
n = +a.slice(0,1);
str = a.slice(1,a.length);
// console.log(n,str);
obj = {a:1,b:2,c:2,d:4},
console.log(Object.keys(obj).length);
for(let i=0;i<str.length;i++){
    let dist = {};
    for(let j=i+1;j<str.length;j++){
        let target = str.slice(i,j+1) 
    }
}
// let a = "abcabc"
// function reduce(a){
//     for(let i=0;i<a.length-1;i++){
//         if(replace_check(a.slice(i,i+2))==-1){
//             continue
//         }else{
//             a=a.replace(a.slice(i,i+2),replace_check(a.slice(i,i+2)))
//             return reduce(a);
//         }
//     }
//     return a.length;
// }
// function replace_check(str){
//     if(str=="ab"|| str=="ba"){
//         return "c"
//     }
//     if(str=="cb"|| str=="bc"){
//         return "a"
//     }
//     if(str=="ac"|| str=="ca"){
//         return "b"
//     }
//     return -1
// }
// console.log(reduce(a));
// a.replace('ab','z');
// console.log(a);

