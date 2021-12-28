let ans = [];
function array_flat(arr){
    for(let i=0;i<arr.length;i++){
        if(typeof(arr[i])=='object'){
            array_flat(arr[i])
        }else{
            ans.push(arr[i])
        }
    }
}
array_flat([1,2,[3,4,[5,6]]])
console.log(ans);