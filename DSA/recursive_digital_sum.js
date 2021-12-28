function digital_sum(num){
    if(num<=9){
        return num
    }else{
        return digital_sum(sum(num))
    }
}
function sum(num){
    if(num>=0 && num<=9){
        return num
    }else{
        return num%10+sum(Math.floor(num/10)) 
    }
}
console.log(digital_sum(12345)); //double recursion used, I expect  better