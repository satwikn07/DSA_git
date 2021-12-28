let ans = {};
function object_flat(obj){
    for(keys in obj){
        if(typeof(obj[keys])=='object'){
            object_flat(obj[keys])
        }else{
            ans[keys] = obj[keys];
        }
    }
}
object_flat({a:{C:1},b:{d:{e:1}}})
console.log(ans);