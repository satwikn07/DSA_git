let arr = [1,2,[1,[1,2]],8];
let op = [1,2,1,1,2,8];
let ans_arr = []
function flatten(arr){
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            flatten(arr[i]);
        }else{
            ans_arr.push(arr[i])
        }
        
    }
}
flatten(arr)
console.log(ans_arr)
//Array.isArrray(arr)
function getDifferentNumber(arr) {
    // your code goes here
    let i = 0;
    let max = Math.max(...arr)
    while(i<=max){
        if(arr.includes(i)){
          i++
        }else{
          return i
        }     
    }
    return max + 1
  }