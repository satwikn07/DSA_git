let str = "a c b c run urn urn";
str = str.trim().split(" ");
console.log(str);
let uni = {}
for(let i=1;i<str.length;i++){
        uni[str[i]]=1;
}
str = Object.keys(uni);
// console.log(str);
let count = 0
for(let i=0;i<str.length;i++){
    for(let j=i+1;j<str.length;j++){
        if(anagram(str[i],str[j])){
            count++;
        }
    }
}
console.log(count);
// console.log(str);
function anagram(a,b){
    if(a==b || a.length!==b.length){
        return false
    }else{
        for(let i=0;i<a.length;i++){
            if(b.includes(a[i])){
                continue
            }else{
                return false
            }
        }
        return true
    }
}
// console.log(anagram('bdc','bcd'))