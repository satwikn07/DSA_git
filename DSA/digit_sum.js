function sum(num){
    if(num<=9){
        return num
    }else{
        return num%10 + sum(Math.floor(num/10))
    }
}

function super_digit(digit){
    let summ = sum(digit)
    if(summ<=9){
         return summ
    }else{
        return super_digit(summ)
   }
}
console.log(super_digit(12345));