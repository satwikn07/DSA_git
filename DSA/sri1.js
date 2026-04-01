// let p = 5, q = 5, r = 4;
// p = (r+2)+r;
// p = 9 + q;
// for(let r=4;r<=5;r++){
//     p = 7 + p;
//     if(r>p || (p+9)<(9-p)){
//         p = r * q;
//         q = (q+1) + q;
//     }
// }
// console.log(p+q);
// function s(a,b,c){
//     a = (b+a)+b;
//     if((7-c-a)>(a+b)){
//         b = 4 + c;
//     }
//     a = c + c
//     return a+b+c
// }
// console.log(s(1,5,5));
// let a = 6, b=5,c=9;
// if((b-a)>(a-b) && 8>c){
//     b = (a+c)**c
//     c = (1+11)&b
// }
// console.log(a+b+c);
// let p=5,q=5,r=10;
// q = r + p;
// if((r**q**7)<(q**p**3)){
//     r = (r+r)+r;
//     p = (q&2)+q
// }
// console.log(p+q+r);
function isValid(s) {
    // Write your code here
    let myObj = {}
    for(let i=0;i<s.length;i++){
        if(myObj[s[i]]){
            myObj[s[i]] = myObj[s[i]] + 1;
        }else{
            myObj[s[i]] = 1;
        }
    }
    // console.log(myObj)
    let prevValue = 0;
    let ans = "YES";
    let j = 0;
    for(let keys in myObj){
        if(!prevValue){
            prevValue = myObj[keys];
        }else{
            if(prevValue != myObj[keys]){
              if(prevValue == myObj[keys]+1 || prevValue == myObj[keys]-1){
                    j +=1;
                }
                else{
                    ans = "NO"
                }
            }else{
                prevValue = myObj[keys];
            }
        }
    }
    if(j>1){
        ans = "NO"
    }
    console.log(ans);
}
isValid('abbcc')