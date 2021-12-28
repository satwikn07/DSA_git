let arr = [1,2,3];
let ans =[];
function shift(arr,n,ele){
    if(n==0){
        ans.push(ele)
    }
    else{
        shift(arr,n-1,ele);
        ans.push(arr[n-1])
    }
}
console.log(arr);