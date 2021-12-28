function arrayFromValue(item) {
    return 
    [item];
  }
  
// console.log(arrayFromValue(10)); // => ???
// const length = 4;
// const numbers = [];
// for (var i = 0; i < length; i++);
// {
//   numbers.push(i + 1);
// }
// //1 , 2, 3 ,4
// console.log(numbers);
// Count Total number of zeros from 1 upto n?
// If n = 100. number of 0 would be 11 (10, 20, 30, 40, 50, 60, 70, 80, 90, 100);
function countzeros(start,end){
    let count = 0;
    for(let i=start;i<=end;i++){
        if(i%10==0){
            let num_str = i.toString().split('');
            for(let j=0;j<num_str.length;j++){
                if(num_str[j]=='0'){
                    count++;
                }
            }
        }
    }
    return count
}
console.log(countzeros(108,2014));

function count_zero(start,end){
    
}


