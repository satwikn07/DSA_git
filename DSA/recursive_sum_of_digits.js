function sum(num){
    if(num>=0 && num<=9){
        return num
    }else{
        return num%10+sum(Math.floor(num/10)) 
    }
}
console.log(sum(12345));